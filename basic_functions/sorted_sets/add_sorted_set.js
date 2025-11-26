const redis_client = require('../../config/redis_config');

//zadd function is used to insert value in the sorted set 
//sorted sets is also set but combination of scoere and value 
const add_sorted_sets = async()=>{
try{
await redis_client.zAdd('players', [
    {
        score : 100, value : 'Shiv'
    },
    {
        score : 200, value : 'Soni'
    },
    {
        score : 300, value : 'ShivSoni'
    }
]);
console.log('score value has been added in sorted set');
}
catch(err){
    console.log('sorted set add err', err);
}
}
module.exports = add_sorted_sets;