const mapping = require('../../models/mapping.js')
const findDisease = require('./finding')
const update = async (req,res) => {
   const diseaseid = req.body.diseaseId
   const symptomid = req.body.symptomId
   symptomid.sort();
   if(!findDisease(symptomid)){
      res.status(200).send('not possible to update');
   }
   else{
      mapping.destroy({
         where : { diseasesId : diseaseid }
      })
      .then((result)=>{
          console.log(result);
      })
      .catch((error)=>{
          console.log(error.message)
      })
      for(let i = 0;i<symptomid.length;i++){ 
         mapping.create({ diseasesId: diseaseid, symptomsId: symptomid[i] })
         .then(()=>{
             console.log(req.body)
         })
         .catch((error)=>{
             console.log(error)
         })
         return res.status(200).send({message : "successfully updated" });
   }
  
   }
}

module.exports = {update};