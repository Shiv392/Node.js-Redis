const redis_client = require('../../config/redis_config');

const hash_set = async()=>{
try{
await redis_client.HSET('user:1', {
    name : 'Shiv',
    skills : 'Fullstack',
    designation : 'Senior SDE',
    age : 18
});
console.log('Item added in hashset ');
}
catch(err){
    console.log('hash set err', err);
}
}

module.exports = hash_set;