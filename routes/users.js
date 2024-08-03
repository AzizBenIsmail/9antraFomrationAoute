var express = require('express');
var router = express.Router();
const userController = require('../controller/usersController');
/* GET users listing. */
router.get('/message',userController.message );

module.exports = router;
