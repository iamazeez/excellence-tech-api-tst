const express = require('express');
const candidateController = require('./../controller/candidateController');
const router = express.Router();

//Get All User
router.get('/',candidateController.getAllUser);
router.post('/',candidateController.createCandidate);


module.exports = router;