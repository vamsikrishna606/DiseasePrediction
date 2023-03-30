const express = require('express');
const { insert} = require('./insertion');
const {update} = require('./updation');
const {list} =require("./list");
const { deletion}=require("./deletion")
const {authAdmin,authUser} = require('../../middleware/auth')


const router = express.Router();


router.post('/insert',authAdmin,insert);
router.put('/update',authAdmin,update);
router.get('/list',authAdmin,list);
router.delete('/delete',authAdmin,deletion);

module.exports =  router ;