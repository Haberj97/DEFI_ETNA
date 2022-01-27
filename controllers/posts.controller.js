const { Post } = require('../models/index');
var express = require('express');
var router = express.Router();

//LIST ALL 
exports.listAll = function (req, res, next) {


  if (req.session.loggedin) {
    
    console.log("Body search: " + req.body.search ) 

    if (req.body.search) {
      Post.findAll({ where: { service: req.body.search } }).then(posts => {

        res.render('index', {
          title: 'Etna Scope',
          data: posts,
          login: req.session.login,isAdmin:req.session.isAdmin
        });
      })
    } else {
      Post.findAll().then(posts => {

        res.render('index', {
          title: 'Etna Scope',
          data: posts,
          login: req.session.login,isAdmin:req.session.isAdmin
        });
      })
    }

    
  }
  else { res.redirect('..') }
}
//GET ONE 
exports.findOne = function (req, res, next) {
  Post.findAll({ where: { id: req.params.id } }).then(post => {
    res.render('modify', { title: 'Etna Scope',data:post ,login:req.session.login,isAdmin:req.session.isAdmin})
  })
}

//CREATE 
exports.create = function (req, res, next) {

  const login = req.body.pictureUrl;
  console.log("login: " + login)
  var pictureUrl = "https://auth.etna-alternance.net/api/users/" + login + "/photo"
  console.log("Picture URL: " + pictureUrl)
  Post.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    pictureUrl: pictureUrl,
    login: login,
    service: req.body.service,
    phone: req.body.phone,
    mail: req.body.mail,
    hrNote: req.body.hrNote,
  }).then(posts => {
    console.log("login2: " + login)
    res.redirect('/');
  })
}
//UPDATE
exports.update = function (req, res, next) {
  const login = req.body.pictureUrl;
  var pictureUrl = "https://auth.etna-alternance.net/api/users/" + login + "/photo"
  
  Post.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    pictureUrl: pictureUrl,
    login: login,
    service: req.body.service,
    phone: req.body.phone,
    mail: req.body.mail,
    hrNote: req.body.hrNote,
  }, {
    where: {
      id: req.body.id
    }
  }).then(posts => {
    res.redirect('/');
  })
}
//DELETE 
exports.delete = function (req, res, next) {
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(posts => { res.redirect('/'); })
}
