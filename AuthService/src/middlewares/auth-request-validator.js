

const validUserAuth=(req,res,next)=>{
       
    if(!req.body.password || !req.body.email)
    {
        return res.status(400).json({

            success:false,
            data:{},
            message:"something went wrong",
            err:"email or password is missing"

        });
    }
    next();

};

module.exports={
    validUserAuth
}