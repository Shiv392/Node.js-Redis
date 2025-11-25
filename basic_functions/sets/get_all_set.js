const redis_client = require('../../config/redis_config');

//smembers function retuns all the items present in the set
const get_all_setitems = async()=>{
try{
const data = await redis_client.sMembers('person_name');
console.log('all set item-->', data);
}
catch(err){
    console.log('get all set item err', err);
}
}
module.exports = get_all_setitems;