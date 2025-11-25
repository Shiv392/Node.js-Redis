const redis_client = require('../../config/redis_config');

// srem function is used to remove data from the set
const remove_set = async()=>{
    try{
        await redis_client.sRem('person_name', 'Shiv');
        console.log('Shiv has been removed');
    }
    catch(err){
        console.log('set remove error ',err);
    }
}
module.exports = remove_set;