const express = require('express');
const { insertion } = require('./insertion');
const {deletion} = require('./deletion');
const {list} = require('./list');
const {update} =require('./updation')
const {diseaseSearch,symptomSearch} = require('./searching');
const {authAdmin,authUser} = require('../../middleware/auth')

const router = express.Router();

router.post('/insert',authAdmin,insertion);
router.delete('/delete',authAdmin,deletion);
//router.get('/list',authAdmin,list);
router.get('/list',authUser,list);
router.put('/update',authAdmin,update);
router.get('/diseasesearch',authAdmin,diseaseSearch);
router.get('/symptomsearch',authAdmin,symptomSearch);

module.exports = router;

