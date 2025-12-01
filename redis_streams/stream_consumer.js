const { createClient } = require("redis");
const client = createClient();

const stream_consumer = async () => {
  try {
    await client.connect();
    console.log("consumer connected");

    while (true) {
      const response = await client.xReadGroup(
        "notification_groups",     // consumer group
        "consumer_1",              // consumer name
        {
          key: "user_events",
          id: ">",                 // new messages only
        },
        {
          COUNT: 5,
          BLOCK: 5000,
        }
      );

      if (!response) continue; // no new messages

      const messages = response[0].messages; // FIXED

      for (const m of messages) {
        console.log("Consumed:", m);

        // Acknowledge
        await client.xAck(
          "user_events",
          "notification_groups",
          m.id
        );
      }
    }
  } catch (err) {
    console.log("stream consumer err", err);
  }
};

module.exports = stream_consumer;
