const { createClient } = require('redis');

const subscriber = createClient();

const redis_subscribe = async () => {
  try {
    await subscriber.connect();

    await subscriber.subscribe('order_events', (message) => {
      console.log('Received redis published data');

      const data = JSON.parse(message);
      console.log('Message data:', data);
    });
  } catch (err) {
    console.log('Redis subscribe error -->', err);
  }
};

module.exports = redis_subscribe;
