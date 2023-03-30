const mapping = require('../../models/mapping.js')
const diseases = require('../../models/diseases.js')
const {Op,Sequelize} = require('sequelize');

 async function findDisease(symid){
let ids=null;
try {
  const diseaseIds = await mapping.findAll({
    attributes: ['diseasesId'],
    where: {
      symptomsId: {
        [Op.in]: symid
      }
    },
    group: 'diseasesId',
    having: Sequelize.literal(`COUNT(DISTINCT symptomsId) = ${symid.length}`)
  });

  // Extract the disease IDs from the result array
   ids = diseaseIds.map(record => record.diseasesId);
 //console.log(ids)3
 return ids;
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'An error occurred' });
}

}

async function disFind(symid){
let sym=0;
  dis=await findDisease(symid)
  //console.log(dis[1])
  for(i=0;i<dis.length;i++){

    const sym1 = await findSymptoms(dis[i])
    //console.log(dis[i],sym1);
    sym1.sort(function(a, b){return a-b});
    if(isEqual(symid,sym1)){
      sym++;
    }
  }
  if(sym!=0){
    return true;
  }
  else
   { 
    console.log(sym);
    return false; }
        function isEqual(a, b)
        {
          return a.join() == b.join();
        }
}





async function findSymptoms(diseaseid){
const symptoms = await mapping.findAll({
  where: {
    diseasesId: diseaseid
  }
});

const result =[];
const array = symptoms.map(row => row.toJSON());
for(var i=0;i<array.length ;i++)
result.push(array[i].symptomsId);
return result.sort();
}

 module.exports = { findDisease, findSymptoms,disFind}