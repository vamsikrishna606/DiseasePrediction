const symptoms= require('../../models/symptoms')
const body =require('body-parser')
const mapping = require('../../models/mapping')
const findDisease = require('../mapping/finding')

const deletion= async (request,response)=>{
  
    const Delete =  request.body.symptomId  

    const symptom =  await symptoms.findOne({ where: { symptomId : Delete } })

   
//deletion in symptom
   if(!findDisease(Delete)){
    return response.status(200).send("not possible to delete");
   }
   else{
     symptoms.destroy({
       where : { symptomId : Delete }
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