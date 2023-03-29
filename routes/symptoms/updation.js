const body = require('body-parser');
const Symptom = require('../../models/symptoms.js');


const getbyid = async (req,res) =>{
    const symptomid = req.body.symptomid;
    let symp = await Symptom.findByPk(symptomid);
    return res.status(200).send(symp);
};

const updatesymptom = (req,res) => {
    const symptomid = req.body.symptomid;

    Symptom.findByPk(symptomid)
    .then((symptom) => {
         symptom.symptom_name = req.body.symptomname;
         return symptom.save();
    })
   .then(() =>{
    console.log("updated");
   })
   .catch((error) => {
    console.log(error);
   })
   return res.status(200).send({ meassage : "Successfully updated"});
}

module.exports = { getbyid ,
    updatesymptom }