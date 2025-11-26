const { createClient } = require('redis');

const publisher = createClient();

const redis_publisher = async () => {
  try {
    await publisher.connect();

    const channel_name = 'order_events';
    const data = JSON.stringify({
      order_id: 1,
      order_name: 'Laptop',
      order_price: '100000 INR'
    });

    await publisher.publish(channel_name, data);
    console.log('Redis publish done');
  } catch (err) {
    console.log('Redis publish error -->', err);
  }
};

module.exports = redis_publisher;
