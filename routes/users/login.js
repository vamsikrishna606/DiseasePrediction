const users = require('../../models/userSignup')
const body =require('body-parser');

const login = async (req,res) =>{
    const username = req.body.username;
    const password =req.body.password;

    const user = await users.findOne({where : {userName : username, password : password}});
    if(user){
        //console.log("found");
        res.status(200).send({token:""})
    }
    else{
        //console.log("not found");
        res.status(404).send("not found")
    }
}

module.exports = {login};

