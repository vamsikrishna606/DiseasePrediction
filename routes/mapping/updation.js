const mapping = require('../../models/mapping.js')
const {disFind,findSymptoms} = require('./finding');
const update = async (req,res) => {
   const diseaseid = req.body.diseaseId
   const symptomid = req.body.symptomId
   symptomid.sort(function(a,b){return a-b});
   if(await disFind(symptomid,diseaseid)){
      res.status(200).send({message : 'not possible to update!!!'});
   }
   // else{
   //    console.log("hello");
   // }
   else{
      mapping.destroy({
         where : { diseasesId : diseaseid }
      })
      .then((diseasesId)=>{
          console.log(diseasesId);
          
      })
      .catch((error)=>{
          console.log(error.message)
      })


      for(let i = 0;i<symptomid.length;i++){ 
         mapping.create({ diseasesId: diseaseid, symptomsId: symptomid[i] })
         .then(()=>{
           return res.status(200).send({message : "Successfully updated..." });
         })
         .catch((error)=>{
             console.log(error)
         })
        
   }
   
   }

}
module.exports = {update};