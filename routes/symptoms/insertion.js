const body = require('body-parser');
const symptoms = require('../../models/symptoms.js');

const insert = async(req,res) => {
try{
    const symptomName =  req.body.symptomName.trim();
    if(!symptomName){
        res.status(401).send({message : "SymptomName is required!!!"})
    }

    const symptom =  await symptoms.findOne({ where: { symptomName : symptomName } })

    if(symptom){
        return res.status(409).send({message : 'Symptom already exists!!!'});
    }
 else{
         await symptoms.create({symptomName : symptomName})
       return res.status(201).send({message : "Successfully Created..."})
    }
}
    catch(err){
        console.log(err);
        res.status(500).send({message : "Internel server error!!!"})
    }
}

module.exports = { insert }