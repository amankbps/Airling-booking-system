
const express=require('express');
const bodyparser=require('body-parser');
const {PORT}=require('./config/serverConfig');

const app=express();

const preapareAndStartServer=()=>{

     app.listen(PORT,()=>{
        console.log(`server starte at PORT ${PORT}`);
     });
}

preapareAndStartServer();