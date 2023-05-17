var express = require('express');
var router = express.Router();
const whiteboardsCtrl = require('../controllers/whiteboards');

/* GET users listing. */
router.get('/', whiteboardsCtrl.index);

module.exports = router;
