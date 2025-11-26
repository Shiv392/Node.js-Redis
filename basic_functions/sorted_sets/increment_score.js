const redis_client = require('../../config/redis_config');

//zincrby function increment the score with value
const increment_score = async()=>{
try{
await redis_client.zIncrBy('players', 250, 'Shiv');
console.log('Shiv has been incremented by 250');

const data = await redis_client.zScore('players', 'Shiv');
console.log('Shiv Score after increment', data);
}
catch(err){
    console.log('increment score err', err);
}
}
module.exports = increment_score;