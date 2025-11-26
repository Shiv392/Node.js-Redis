const redis_client = require('../../config/redis_config');

const get_hash_value = async()=>{
try{
const values = await redis_client.hVals('user:1');
console.log('user:1 hash value', values);
}
catch(err){
    console.log('get hash value err', err);
}
}
module.exports = get_hash_value;