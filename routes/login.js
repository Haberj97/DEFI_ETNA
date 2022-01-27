var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../models/index');
var login = require('../controllers/login.controller')

//route by default 
router.get('/',function(req, res, next) {
  if(req.session.loggedin){
    res.redirect('/index')
  }else{res.render('login',{ title: 'Etna-Scope Login',})}
  })
//route to login 
router.post('/',login.checkEtnaLogin)
//route to log out
router.post('/logout',function(req, res, next) {
  req.session.destroy(null);
  res.clearCookie(this.cookie, { path: '/' });
  res.redirect('..')
})

module.exports = router;

  

