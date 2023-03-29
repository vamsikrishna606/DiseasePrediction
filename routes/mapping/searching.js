const body =require('body-parser')
const mapping = require('../../models/mapping.js')
const find = require('./finding');
const {findDisease,findSymptoms,disFind} = require('./finding');

const diseaseSearch = async(req,res)=>{

    const symptomid = req.body.symptomId;
    symptomid.sort(function(a, b){return a-b});
    const disid = await disFind(symptomid)
    console.log(disid)
//return res.send(maxDiseaseId)
}




const symptomSearch = async(req,res) => {
const diseaseid = req.body.diseaseId
const result= await findSymptoms(diseaseid);

return res.status(200).send(result);
}


module.exports = {diseaseSearch, symptomSearch};