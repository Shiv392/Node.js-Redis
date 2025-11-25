const redis_client = require('../../config/redis_config');

//to get the list from the redis we generally used LRANGE with index left to right
//just like array 
const get_list = async()=>{
try{
const data = await redis_client.lRange('cities', 0, -1);
console.log('list data --->', data);
}
catch(err){
    console.log('getlist err--->', err);
}
}

module.exports = get_list;