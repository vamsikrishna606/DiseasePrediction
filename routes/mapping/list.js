const mapping = require('../../models/mapping.js')

const list = async (request, response) => {
    try {
      const map= await mapping.findAll(); 
      response.status(200).send({message : map}); 
    } catch (error) {
      response.status(500).send({message : 'Error retrieving users'});
    }
  };

module.exports = { list };