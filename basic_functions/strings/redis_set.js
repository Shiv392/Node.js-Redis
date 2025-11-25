const redis_client = require('../../config/redis_config');

//redis.set fucntion is used to set a key value 
const redis_set = async()=>{
    console.log('redis set function working--->')
await redis_client.set('name', 'Shiv Soni');
}

module.exports = redis_set;