const {createClient} = require('redis')

const redis_client = createClient({
    url : process.env.REDIS_URL || 'redis://localhost:6379'
});

module.exports = redis_client;