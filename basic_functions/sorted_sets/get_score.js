const redis_client = require('../../config/redis_config');

const get_member_score = async()=>{
try{
const score = await redis_client.zScore('players', 'Shiv');
console.log('Shiv Score in sorted set', score);
}
catch(err){
    console.log('get member score err', err);
}
}
module.exports = get_member_score;