const {createClient} = require('redis');

const client = createClient();

const stream_producer = async()=>{
try{
await client.connect();
console.log('producer connected to redis');
setInterval(async() => {
    const id = await client.xAdd(
        "user_events",
        "*",
        {
            event : 'user_registered',
            user_id : Math.floor(Math.random()*100).toString()
        }
    );
    console.log('produced event with id ---->', id);
}, 2000);
}
catch(err){
    console.log('stream producer error---->', err);
}
}
module.exports = stream_producer;