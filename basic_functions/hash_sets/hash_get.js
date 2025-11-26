const redis_client = require('../../config/redis_config');

//HGET function return only specified fiels(one field)
const hash_get = async()=>{
try{
const data = await redis_client.HGET('user:1', 'name');
console.log('user 1 hash name', data);
}
catch(err){
console.log('hash get err', err);
}
}


//HGETALL function return the entire object 
const hash_get_all = async()=>{
try{
const data = await redis_client.HGETALL('user:1');
console.log('user 1 hash data', data);
}
catch(err){
console.log('hash get err', err);
}
}
module.exports = {hash_get, hash_get_all}