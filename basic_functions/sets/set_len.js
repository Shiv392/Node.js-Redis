const redis_client = require('../../config/redis_config');

//to get the number of element in the set, we use scard function 
const set_length = async()=>{
try{
const length = await redis_client.sCard('person_name');
console.log('number of element in set ', length);
}
catch(err){
console.log('set length err', err);
}
}
module.exports = set_length;