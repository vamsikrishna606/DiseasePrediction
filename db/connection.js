const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('predict','root','root',{
    dialect :'mysql',
    host : 'localhost'
});

module.exports = sequelize;