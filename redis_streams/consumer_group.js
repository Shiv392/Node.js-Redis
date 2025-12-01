const {createClient} = require('redis');
const client = createClient();

const create_groups = async()=>{
try{
await client.connect();
await client.xGroupCreate("user_events", 'notification_groups','0-0',{
    MKSTREAM : true
});
console.log('consumer group created');
}
catch(err){
    console.log('create group err---->', err);
}

await client.quit();
}
module.exports = create_groups;