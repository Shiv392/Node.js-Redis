const redis_client = require('../../config/redis_config');

//hexits() return true if fields is exits in redis hash
const check_exits = async()=>{
try{
const exists = await redis_client.hExists('user:1', 'name'); //does name fields exits in user:1 hash set
console.log('name exists in user:1 hashset', exists);
}
catch(err){
    console.log('check exits err', err);
}
}
module.exports = check_exits;