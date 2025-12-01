const redis_client = require('../config/redis_config');

//setEx function is used to store a key with specified time in second.

const redis_setex = async()=>{
    try{
    await redis_client.setEx('otp:sonishiv309', 300, '12344'); //300 second means 5 minutes 
    }
    catch(err){
        console.log('redis setex error-->', err);
    }
}

module.exports = redis_setex;