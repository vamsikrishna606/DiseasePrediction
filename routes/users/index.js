const express = require('express');
const { insertion } = require('./insertion');
const {list} =require("./list");
 const { deletion }=require("./deletion")
 const {login} = require('./login')
 const {authAdmin,authUser} = require('../../middleware/auth')


const router = express.Router();
router.post('/insert',authAdmin,insertion);
router.get('/list',authAdmin,list);
 router.delete('/delete',authAdmin,deletion);
 router.get('/login',login);

module.exports = router;