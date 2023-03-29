const body =require('body-parser')

const diseases = require('../../models/diseases.js')

const insertion = async(req,res)=>{
    const insert = req.body.disname.trim();

    const disease =  await diseases.findOne({ where: { diseaseName : insert } })
    if(disease){
        return res.status(500).send('Disease already exists');
    }

    else{
    diseases.create({diseaseName : insert})
        .then(()=>{
            console.log(req.body)
        })
        .catch((error)=>{
            console.log(error.message)
        })
      return  res.send()
    }
}

module.exports = {insertion};