const body = require('body-parser');
const users = require('../../models/userSignup');

const insertion= async(req,res) => {
   
    const uname = req.body.uname
    const email = req.body.email;
    const mobile = req.body.mobile
    const name =  req.body.name;
    const pwd = req.body.pwd;
    const role= req.body.role;
    const gender = req.body.gender;

    const usermail =  await users.findOne({ where: { email : email } }) 

    if(usermail){
        return res.status(500).send('User already exists');
    }
 else{
  users.create({ 
    userName : uname,
    email : email,
    mobileNumber : mobile,
    name : name,
    password : pwd,
    Role : role,
    gender : gender
  }) 
       .then(() => {
        console.log(req.body);
       }) 
       .catch((error) => {
        console.log(error);
       })
       return res.send()
    }
}


module.exports = { insertion };