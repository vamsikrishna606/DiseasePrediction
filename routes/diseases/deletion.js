const diseases= require('../../models/diseases.js')

const deletion = async(request,response) => {
  
    const Delete =  request.body.diseaseId  
    
    //const disease =  await diseases.findOne({ where: { diseaseId : Delete } })

   
    diseases.destroy({
       where : {diseaseId :  Delete}
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error.message)
    })
    return response.status(200).send({message : " deleted successfully"});
    
}

module.exports ={ deletion };