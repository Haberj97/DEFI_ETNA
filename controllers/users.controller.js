var express = require('express');
var router = express.Router();

var login = require('../controllers/login.controller')
const {User} = require('../models/index');

//LIST ALL USERS 
exports.listAll = function (req, res, next) {
      if(req.session.loggedin && req.session.isAdmin){
            User.findAll().then(users => { 
                  res.render('admin',{ 
                        title: 'Account Adminstration',data:users,login:req.session.login
                  });
            }) 
      }
      else {res.redirect('..')}
}
//FIND ONE USER
exports.findOne = function(req, res, next){
      if(req.session.loggedin && req.session.isAdmin){
            var state;
            User.findAll({where:{id:req.params.id}}).then(users => {
                  users.isAdmin == 0  ? state = 1 : state = 0;
            })
            User.update({ 
                  isAdmin : state
            },{
                  where:{
                        id : req.params.id
                  }
            }).then( user =>{ 
                  res.redirect('/admin');
            })

      }else {res.redirect('..')}
}
//UPDATE ONE USER

//DELETE AN USER 
exports.delete = function(req,res,next){
      if(req.session.loggedin && req.session.isAdmin){
            User.destroy({
                  where: {
                        id: req.params.id
                  }
            }).then( posts => { res.redirect('/admin');})
      }else{res.redirect('..')}
}