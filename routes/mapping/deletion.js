const body =require('body-parser')
const sequelize =require('sequelize');
const mapping = require('../../models/mapping.js')
const diseases = require('../../models/diseases.js')
const symptoms =require('../../models/symptoms.js')
//const find = require('./finding.js');
const {findDisease,findSymptoms} = require('./finding');

let sym=0;
const deletion =   async (request, response) => {
try{
  const diseaseId = request.body.diseaseId;
  const symptomId = request.body.symptomId;
  symptomId.sort();
  const diseaseDeletion = await mapping.findAll({where : {diseasesId : diseaseId}})
  if(diseaseDeletion.length ==symptomId.length){
    diseases.destroy({where : {diseaseId : diseaseId}})
    return response.status(200).send({message : "Diseases and Symptoms Deleted successfully"})
  }
  
    const mappings = await mapping.findAll({ where: { diseasesId: diseaseId } })
      
    const symptomsId =[];
    for(let i=0; i<mappings.length; i++){
      symptomsId.push(mappings[i].symptomsId);
    }

    const symarray = symptomsId.filter(element => symptomId.indexOf(element) === -1);


dis=await findDisease(symarray)
for(i=0;i<dis.length;i++){
  const sym1 = await findSymptoms(dis[i])
  sym1.sort(function(a, b){return a-b});
  if(isEqual(symarray,sym1)){
    sym++;
    break;
  }
}
      function isEqual(a, b)
    	{
	      return a.join() == b.join();
	    }
      if(sym == 0){
      let DiseaseId = {
        diseasesId : diseaseId,
          symptomsId : symptomId
      }
        mapping.destroy({where : DiseaseId})
        .then(()=>{
            console.log(request.body)
        })
        .catch((error)=>{
            console.log(error.message)
        })
        response.status(200).send({message:"Successfully Deleted...."})
      }
      else{
        response.status(409).send({message:"Deletion is not possible!!!!"});
      }
      return  response.send()
    }
    catch(err){
      console.log(err);
      response.status(500).send({message : "Internel server error!!!"})
  }
};

module.exports = {deletion};
