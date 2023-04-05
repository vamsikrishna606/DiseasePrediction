const mapping = require('../../models/mapping.js')
const {Op,Sequelize} = require('sequelize');
const {findDisease,findSymptoms} = require('./finding');

let sym=0;
const insertion = async (req, res) => {
  const diseaseId = req.body.diseaseId;
  const symptomId = req.body.symptomId;

  if(!symptomId){
    res.status(401).send({message : "SymptomId is required!!!"})
  }
  

  symptomId.sort(function(a, b){return a-b});

dis=await findDisease(symptomId)
for(i=0;i<dis.length;i++){
  const sym1 = await findSymptoms(dis[i])
  sym1.sort(function(a, b){return a-b});
  if(isEqual(symptomId,sym1)){
    sym++;
    break;
  }
}

function isEqual(a, b)
	{
	return a.join() == b.join();
	}

       if(sym!=0){
        res.status(401).send("Not possible to insert!!!");
       } 
       else{
         // symid.sort(function(a, b){return a-b});
       for (let i = 0;i<symptomId.length;i++){ 
        let check = await mapping.findOne({ where : { diseasesId : diseaseId, symptomsId : symptomId[i]}})
        if(check){
          console.log("Already Existed...");
        }
        else {
        mapping.create({ diseasesId: diseaseId, symptomsId: symptomId[i] })
            .then(()=>{
                console.log(req.body)
            })
            .catch((error)=>{
                console.log(error)
            })
          }
         }
          return  res.send()
    } 
  
  }
module.exports = {insertion};