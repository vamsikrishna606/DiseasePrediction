const express = require('express');
const { insertion } = require('./insertion');
const {deletion} = require('./deletion');
const {list} = require('./list');
const {update} =require('./updation')
const {diseaseSearch,symptomSearch} = require('./searching');
const router = express.Router();

router.post('/insert',insertion);
router.delete('/delete',deletion);
router.get('/list',list);
router.put('/update',update);
router.get('/diseasesearch',diseaseSearch);
router.get('/symptomsearch',symptomSearch);

module.exports = router;

