const body =require('body-parser')
const mapping = require('../../models/mapping.js')
const find = require('./finding');
const {findDisease,findSymptoms,disFind} = require('./finding');

const diseaseSearch = async(req,res)=>{
try{
    const symptomId = req.body.symptomId;
    if(!symptomId){
        res.status(401).send({message : "SymptomId is required!!!"})
    }
    symptomId.sort(function(a, b){return a-b});
    const disid = await disFind(symptomId)
    return res.status(200).send({message : disid});
}
catch(err){
    console.log(err);
    res.status(500).send({message : "Internel server error!!!"})
}
}



const symptomSearch = async(req,res) => {
try{
const diseaseId = req.body.diseaseId
const result= await findSymptoms(diseaseId);

return res.status(200).send({message : result});
}
catch(err){
    console.log(err);
    res.status(500).send({message : "Internel server error!!!"})
}
}


module.exports = {diseaseSearch, symptomSearch};