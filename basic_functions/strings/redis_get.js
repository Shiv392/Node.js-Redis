const redis_client = require('../../config/redis_config');

//function to get redis daa using its key like get('key_name');
const redis_get = async()=>{
const redis_value = await redis_client.get('name');
console.log('redis_value---->', redis_value)
}

module.exports = redis_get;