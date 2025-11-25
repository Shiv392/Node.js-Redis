const redis_client = require('../../config/redis_config');

const list_length = async()=>{
    try{
    const length = await redis_client.lLen('cities');
    console.log('list length', length);
    }
    catch(err){
        console.log('list length error', err);
    }
}
module.exports = list_length;