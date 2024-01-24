
const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');

const ApiRoutes=require('./routes/index');


const app=express();

const preapareAndStartServer=()=>{
    
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));

      app.use('/api',ApiRoutes);
      
     app.listen(PORT,()=>{
        console.log(`server starte at PORT ${PORT}`);

       
     });
}

preapareAndStartServer();