const bcrypt = require('bcrypt')
const users = require('../../models/userSignUp')

const changePassword= async(request,response)=>{
    const userName=request.body.userName
    if(!userName){
        return response.status(409).send({message:"Username is required."})
    }
    const user = await users.findOne({
        where: { userName:userName }
      })
      if(user){
       
           const newPassword =request.body.newPassword
           let temp=await encryption(newPassword)
           console.log(user.password)
           user.password=temp
           console.log(user.password)
            user.save()
      }
      else{
        return response.status(404).send({message:"User not found."});
    }
    return response.status(200).send({message : "Successfully updated"})
}
async function encryption(newPassword){
    return bcrypt.hash(newPassword, 10).then(function(hash) {
        return hash;
    });
}

module.exports = {changePassword}