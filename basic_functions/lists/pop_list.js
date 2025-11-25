const redis_client = require('../../config/redis_config');

const left_pop = async()=>{
try{
const data = await redis_client.lPop('cities');
console.log('left pop data --->', data);
}
catch(err){
    console.log('left pop err', err);
}
}

const right_pop = async()=>{
try{
const data = await redis_client.rPop('cities');
console.log('right pop data --->', data);
}
catch(err){
    console.log('right pop error', err);
}
}

module.exports = {left_pop, right_pop};