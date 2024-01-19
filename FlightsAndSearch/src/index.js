const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig.js');
const ApiRoutes=require('./routes/index');

const db=require('./models/index');
const {Airport,City}=require('./models/index');

const setupAndStartServer=async()=>{

    //create the express object
    
    const app=express();
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));
     app.use('/api',ApiRoutes);
     
     
    app.listen(PORT,async()=>{
        console.log(`Server is started at ${PORT}`);
       
        if(process.env.SYNC_DB)
        {
            db.sequelize.sync({alter:true});
        }
        const city=await City.findOne({
            where:{id:3}
        });
        const airports=await city.getAirports();
        console.log(city,airports);

        
    });
}

setupAndStartServer();