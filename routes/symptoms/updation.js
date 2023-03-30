const Symptom = require('../../models/symptoms.js');

const update = async (req,res) => {
try{
    const symptomId = req.body.symptomId;
    if(!symptomId){
        res.status(401).send({message : "SymptomId is required!!!"})
    }
    const symptomName = req.body.symptomName.trim();
    if(!symptomName){
       res.status(401).send({message : "SymptomName is required!!!"})
   }
   const symptom =  await Symptom.findOne({ where: { symptomName : symptomName } })

    if(symptom){
        return res.status(409).send({message : 'Symptom already exists!!!'});
    }
    else{
    Symptom.findByPk(symptomId)
    .then((symptom) => {
        symptom.symptomName = symptomName;
         return symptom.save();
    })
   .then(() =>{
    return res.status(200).send({ meassage : "Successfully updated"});
   })
 }

}
catch(err){
    console.log(err);
    res.status(500).send({message : "Internel server error!!!"})
}
}

module.exports = { update }