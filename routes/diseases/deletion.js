const diseases= require('../../models/diseases.js')

const deletion = async(req,res) => {
  
try{
    const diseaseId =  req.body.diseaseId.trim();  
    
    //const disease =  await diseases.findOne({ where: { diseaseId : Delete } })
   
    diseases.destroy({
       where : {diseaseId :  diseaseId}
    })
    .then(()=>{
        return res.status(200).send({message : "Disease deleted successfully"});
    })
    .catch((error)=>{
        console.log(error.message)
    })
}
catch(err){
    console.log(err);
    res.status(500).send({message : "Internel server error!!!"})
}
    
}

module.exports ={ deletion };