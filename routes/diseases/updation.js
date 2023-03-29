const diseases = require('../../models/diseases.js');


const getbyid = async (request,response) =>{
    const diseaseId = request.body.diseaseId
    let id= await diseases.findByPk(diseaseId)
    return response.status(200).send(id)
}

const updation= (request,response) => {
    const diseaseId = request.body.diseaseId;

    diseases.findByPk(diseaseId)
    .then((diseases) => {
         diseases.diseaseName = request.body.diseaseName;
         return diseases.save();
    })
   .then(() =>{
    console.log("updated");
   })
   .catch((error) => {
    console.log(error.message);
   })
   return response.status(200).send({message : " updated successfully"});
}

module.exports = {updation,getbyid};