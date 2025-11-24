const app = require('./config/server_config');
const redis_client = require('./config/redis_config');
const port = Number(process.env.SERVER_PORT) || 8001;

app.get('/add-name', async(req,res)=>{
  await redis_client.set('name', 'this is shiv soni');

  const name = await redis_client.get('name');
  return res.status(200).json({
    success : true,
    name : name
  })
})

app.listen(port,()=>{
    console.log(`server started : http://localhost:${port}`)
})