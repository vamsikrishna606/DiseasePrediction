const users = require('../../models/userSignUp')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const secret = 'SenecaGlobal';

const login = async (request,response) =>{
try{
    
        const userName=request.body.userName
        const password =request.body.password
        if(!userName){
            return response.status(400).send({message:"User name is required!!!"});
        }
        if(!password){
            return response.status(400).send({message:"Password is required!!!"});
        }
        const user = await users.findOne({
            where: { userName:userName }
          })
         //console.log(user.Role);
        if(user){
            const match = await bcrypt.compare(String(password), user.password);
            if(match){
                const token = jwt.sign({
                    userName: user.userName,
                    role:user.Role
                }, secret);
                return response.status(200).send({token:token})
            }  
           else{
                return response.status(401).send({message:"Invalid credential!!!"});
                }
        }else{
            return response.status(404).send({message:"User not found!!!"});
        }
    }
    catch(err){
        console.log(err);
        response.status(500).send({message : "Internel server error!!!"})
    }
}

module.exports = {login};

