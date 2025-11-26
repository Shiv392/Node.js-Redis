const redis_client = require('../../config/redis_config');

//zrange function retusn all values 
const get_sorted_set = async()=>{
try{
const sorted_set = await redis_client.zRange('players', 0, -1);
console.log('sorted set data increasing score vlaue', sorted_set);
}
catch(err){
    console.log('get sorted set err', err);
}
}

//zrange_withscores function returns complete sorted_sets
const get_score_sorted_set = async()=>{
try{
const sorted_score_set = await redis_client.ZRANGE_WITHSCORES('players', 0, -1);
console.log('sorted set data with score complete', sorted_score_set);
}
catch(err){
    console.log('get score sorted set', err);
}
}

module.exports = {get_sorted_set, get_score_sorted_set}