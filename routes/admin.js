var express = require('express');
var router = express.Router();
const {User} = require('../models/index');
const admin = require('../controllers/users.controller');

//GET ALL USER
router.get('/',admin.listAll);
//GET ONE USER
router.get('/:id', admin.findOne);
//DELETE AN USER 
router.get('/dl/:id', admin.delete);

module.exports = router;