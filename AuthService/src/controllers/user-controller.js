

const UserService=require('../services/user-service');

const userService=new UserService();
const create=async(req,res)=>{

    try {
          const respond=await userService.create({
            email:req.body.email,
            password:req.body.password
          });

          return res.status(201).json({
            success:true,
            data:respond,
            err:{},
            message:"successfully created user"
          });
        
    } 
    catch (error) {
        return res.status(500).json({
            message:"something went wrong",
            data:{},
            success:false,
            err:error

        });
        
    }

};

module.exports={
    create
}