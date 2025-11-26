const redis_client = require('../../config/redis_config');

//hkeys() return all keys in the hash
const get_hashkeys = async()=>{
try{
const keys = await redis_client.hKeys('user:1');
console.log('user:1 keys', keys);
}
catch(err){
    console.log('hash key err', err);
}
}
module.exports = get_hashkeys;