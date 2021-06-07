const express = require('express');
const scoreController = require('./../controller/scoreController');
const router = express.Router();

router.get('/',scoreController.getAllScore);
router.post('/',scoreController.createScore);
router.get('/highscorer',scoreController.getHighScore);

module.exports = router;