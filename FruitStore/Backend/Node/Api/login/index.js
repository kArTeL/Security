'use strict';

var express = require('express');
var controller = require('./login.controller');

var router = express.Router();
console.log(controller);
router.post('/', controller.index);
//router.get('/:id',controller.show);
module.exports = router;
