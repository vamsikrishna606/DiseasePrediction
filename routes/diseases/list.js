const diseases =require('../../models/diseases.js');

const list = async (request, response) => {
    try {
      const disease= await diseases.findAll(); 
      response.send(disease); 
    } catch (error) {
      console.log(error);
      response.status(500).send('Error retrieving users');
    }
  };

module.exports = { list };