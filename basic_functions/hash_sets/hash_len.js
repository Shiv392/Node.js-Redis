const redis_client = require('../../config/redis_config');

//hashlen function return the number of field in the given hash key
const hash_len = async()=>{
try{
const len = await redis_client.hLen('user:1');
console.log('hash len' ,len);
}
catch(err){
    console.log('hash len err', err);
}
}
module.exports = hash_len;