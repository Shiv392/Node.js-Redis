const redis_client = require('../../config/redis_config');

//zrank fucntion return the rank of the players in the sorted set
const get_player_rank = async()=>{
try{
const rank = await redis_client.zRank('players', 'Shiv');
console.log('Shiv Rank', rank);
}
catch(err){
    console.log('get player rank err', err);
}
}
module.exports = get_player_rank;