const express = require('express');
const router = express.Router();
const exampleController = require('../Controller/UserController');


router.get('/alocacao', exampleController.getAllExamples);


module.exports = router;
