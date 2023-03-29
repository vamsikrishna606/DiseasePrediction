const body = require('body-parser');
const symptoms = require('../../models/symptoms.js');

const insertsymptom = async(req,res) => {
    const insert =  req.body.symptomname.trim();
  
    const symptom =  await symptoms.findOne({ where: { symptom_name : insert } })

    if(symptom){
        return res.status(500).send('Symptom already exists');
    }
 else{
  symptoms.create({symptom_name : insert}) 
       .then(() => {
        console.log(req.body);
       }) 
       .catch((error) => {
        console.log(error);
       })
       return res.send()
    }
}

module.exports = { insertsymptom }