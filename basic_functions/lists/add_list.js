const redis_client = require('../../config/redis_config');

//we can add into the list from both side including form front and back also. 
// we need lpush() to add from the front side
//we need rpush() to add from end;
const front_add_list = async()=>{
try{
await redis_client.lPush('cities', 'Raipur', 'Durg', 'Gurgaon', 'Hyderabad');
console.log('cities has been pushed into the redis list from front');
}
catch(err){
console.log('l_push list error-->', err);
}
}

const end_add_list = async()=>{
try{
await redis_client.rPush('cities', 'Bengaluru');
console.log('cities has been added from back')
}
catch(err){
console.log('r_push list err--->', err);
}
}

module.exports = {front_add_list, end_add_list}