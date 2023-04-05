const express = require('express');
const  symptom  = require('./symptoms/index');
const disease= require('./diseases/index');
const map = require('./mapping/index');
const user =require('./users/index');
const app=express();



app.use('/symptom',symptom);
app.use('/disease',disease);
app.use('/map',map);
app.use('/users',user);


module.exports = app;