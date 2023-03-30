const symptoms= require('../../models/symptoms')
const mapping = require('../../models/mapping')
const findDisease = require('../mapping/finding')

const deletion= async (request,response)=>{
  
    const symptomId =  request.body.symptomId.trim();  
    if(!symptomId){
      res.status(401).send({message : "SymptomId is required!!!"})
  }

    const symptom =  await symptoms.findOne({ where: { symptomId : symptomId } })

   if(!findDisease(symptomId)){
    return response.status(200).send({message : "Not possible to delete"});
   }
   else{
     symptoms.destroy({
       where : { symptomId : symptomId }
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error.message)
    })
    return response.send()
  }
  
}

module.exports ={ deletion };