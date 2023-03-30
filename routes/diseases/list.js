const diseases =require('../../models/diseases.js');

const list = async (req, res) => {
    try {
      const disease= await diseases.findAll(); 
      res.status(200).send({message : disease}); 
    } catch (error) {
      console.log(error);
      res.status(500).send('Error retrieving users');
    }
  };

module.exports = { list };