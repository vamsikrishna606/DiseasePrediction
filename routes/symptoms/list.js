const symptoms = require('../../models/symptoms');

const list = async (req, res) => {
    try {
      const symptom = await symptoms.findAll(); 
        res.status(200).send({message : symptom}); 
    } catch (error) {
        res.status(500).send({message : 'Error in retrieving users'});
    } 

  };

module.exports = { list };