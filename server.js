const app = require('./config/server_config');

const port = Number(process.env.SERVER_PORT) || 8001;

app.listen(port,()=>{
    console.log(`server started : http://localhost:${port}`)
})