const redis_client = require('./config/redis_config');

redis_client.on('error', (err)=> console.log('redis error ', err));

redis_client.on('connect', ()=> console.log('redis connection done'));

(
    async()=>{
    try{
    await redis_client.connect();
    console.log('redis connection succesfull ✌️✌️');
    }
    catch(err){
    console.log('redis connection error 😢😢😢', err);
    }
    }
)();