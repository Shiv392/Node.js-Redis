const redis_client = require('../../config/redis_config');


//zrem function remove the value 
const remove_sorted_set = async()=>{
try{
await redis_client.zRem('players', 'Soni');
console.log('Soni has been removed');

const data = await redis_client.zScore('players', 'Soni');
console.log('Soni score after remov', data);
}
catch(err){
    console.log('remove sorted set err', err);
}
}

module.exports = remove_sorted_set;