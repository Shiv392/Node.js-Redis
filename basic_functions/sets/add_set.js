const redis_client = require('../../config/redis_config');

//sadd function is used to add item into the redis set using key
const add_set = async()=>{
try{
await redis_client.sAdd('person_name', 'Shiv','Rahul','Jai');
console.log('person added in redis set');
}
catch(err){
console.log('redis set err', err);
}
}
module.exports = add_set;