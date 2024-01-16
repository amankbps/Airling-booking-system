const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig.js');

const CityRepository=require('./repository/city-repository.js');

const setupAndStartServer=async()=>{

    //create the express object
    
    const app=express();
     app.use(bodyParser.urlencoded({extended:true}));
     
    app.listen(PORT,async()=>{
        console.log(`Server is started at ${PORT}`);
        const city=new CityRepository();
        city.deleteCity({cityid:1});
        
    });
}

setupAndStartServer();