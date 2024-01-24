
const UserRepository=require('../repository/user-repository');
const jwt=require('jsonwebtoken');
const { JWT_KEY }=require('../config/serverConfig');
class UserService{

    constructor(){
        this.userRepository=new UserRepository();
    }

    async create(data){

        try {
            
            const user=this.userRepository.create(data);
            return user;
        } 
        catch (error) {

            console.log("something went wrong in service layer");
            throw (error);
        }

    }

   createToken(user){
       
    try {
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        
    } 
    catch (error) {

        console.log("something went wrong in token cration");
        throw (error);
    }

   }

   verifyTokene(token){

      try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
      } 
      catch (error) {
        console.log("something went wrong in token verification");
        throw (error);
      }
   }
}

module.exports=UserService;