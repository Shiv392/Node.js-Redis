const redis_client = require('../../config/redis_config');

const list_itemby_index = async()=>{
    try{
    const data = await redis_client.lIndex('cities', 0);
    console.log('list index item ', data);
    }
    catch(err){
        console.log('list item by index err', err);
    }
}

module.exports = list_itemby_index;