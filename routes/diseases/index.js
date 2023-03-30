const express = require('express');
const { insertion } = require('./insertion');
const { updation} = require('./updation');
const {deletion} =require('./deletion');
const {list} =require("./list");
const {authAdmin,authUser} = require('../../middleware/auth')

const router = express.Router();

router.post('/insert',authAdmin,insertion);
router.put('/update',authAdmin,updation);
router.delete('/delete',authAdmin,deletion);
router.get('/list',authUser,list);


module.exports =  router ;