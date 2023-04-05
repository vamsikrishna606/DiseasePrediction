const symptoms= require('../../models/symptoms')
const mapping = require('../../models/mapping')
const {findDisease, disFind} = require('../mapping/finding')

const deletion= async (request,response)=>{
  try{
  
    const symptomId =  request.body.symptomId;  
    //console.log(symptomId)
    if(!symptomId){
      response.status(401).send({message : "SymptomId is required!!!"})
  }

  let symArr1=[];
  let dis=[];
  const disease = await mapping.findAll();

  for(i=0;i<disease.length;i++){
    dis.push(disease[i].diseasesId);
  }
  var dis1 = [...new Set(dis)]
  
symArr1 = await findSym(dis1,symptomId)
const uniqueArr = Array.from(new Set(symArr1.map(subArr => JSON.stringify(subArr)))).map(str => JSON.parse(str));

     if(uniqueArr.length === symArr1.length){
      symptoms.destroy({
             where : { symptomId : symptomId[0] }
          }).then((result)=>{
                  //console.log(result);
            })
            .catch((error)=>{
                    console.log(error.message)
                })
     }
     else{
      response.status(409).send({message : "Not possible to delete"})
     }
    }
    catch(error){
      response.status(500).send({message : "Internal server error"})

    }
}

async function findSym(dis1,symptomId){
  const promises = dis1.map(async (id) => {
    const sym = await mapping.findAll({ where: { diseasesId: id } });
    return sym;
  });
  const results = await Promise.all(promises);
  const symArr1 = [];
  for (let i = 0; i < results.length; i++) {
    const sym = results[i];
    const symArr = [];
  
    for (let j = 0; j < sym.length; j++) {
      if (sym[j].symptomsId != symptomId) {
        symArr.push(sym[j].symptomsId);
      }
    }
    symArr1.push(symArr);
  }
  console.log(symArr1)
  return symArr1;
}


module.exports ={ deletion };