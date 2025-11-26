const redis_client = require('../../config/redis_config');

const hash_increment_by = async()=>{
try{
await redis_client.hIncrBy('user:1', 'age', 10);
console.log('user:1 age has been added by 10');
const user = await redis_client.hGetAll('user:1');
console.log('user:1 after increment', user);
}
catch(err){
    console.log('hash increment by err', err);
}
}
module.exports = hash_increment_by;