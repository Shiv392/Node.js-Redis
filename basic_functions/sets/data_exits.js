const redis_client = require('../../config/redis_config');

//sismember function is used to check existence of the value in the redis set
const data_exits = async()=>{
try{
const check = await redis_client.sIsMember('person_name', 'Shiv');
console.log('Shiv Prensent in the set', check);
}
catch(err){
    console.log('set exits err', err);
}
}
module.exports = data_exits;