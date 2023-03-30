const diseases = require('../../models/diseases.js');


const updation= async (request,response) => {
    
try{
    const diseaseId = request.body.diseaseId;
    if(!diseaseId){
        return res.status(401).send({message : "diseaseId is required!!!"})
    }
    diseaseName = request.body.diseaseName.trim();
    const disease =   await diseases.findOne({ where: { diseaseName : diseaseName } })
      if(disease){
        return response.status(409).send({message : 'Disease already exists '});
      }
        const dis = await diseases.findByPk(diseaseId)
          .then((diseases) => {
            diseases.diseaseName = diseaseName;
            return diseases.save();
        })
   .then(() =>{
    response.status(200).send({message : "Disease updated successfully..."})
   })
   .catch((error) => {
    console.log(error.message);
   })
}
catch(err){
    console.log(err);
    response.status(500).send({message : "Internel server error!!!"})
}
}

module.exports = {updation};