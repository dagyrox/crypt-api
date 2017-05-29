'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./jp-blog.controller');

//router.get('/', controller.getAll);
router.get('/:id', controller.getAll);
router.post('/create', controller.create);
router.delete('/:id',controller.delete);

module.exports = router;