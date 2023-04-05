const mapping = require('../../models/mapping.js')
const {disFind,findSymptoms} = require('./finding');
const update = async (req,res) => {
   try{
   const diseaseid = req.body.diseaseId
   const symptomid = req.body.symptomId
   symptomid.sort(function(a,b){return a-b});
   if(await disFind(symptomid,diseaseid)){
      res.status(409).send({message : 'not possible to update!!!'});
   }
   else{
      mapping.destroy({
         where : { diseasesId : diseaseid }
      })

      for(let i = 0;i<symptomid.length;i++){ 
         mapping.create({ diseasesId: diseaseid, symptomsId: symptomid[i] })         
   }
   return res.status(200).send({message : "Successfully updated..." });
   }
}
catch(error){
   return res.status(500).send({message : "Internal server error..." });
}

}
module.exports = {update};