
const {User} = require('../models/index');
var express = require('express');
const LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'login'},(email,done)=> {
                //match user
                User.findOne({login : login})
                .then((user)=>{
                 if(!user) {
                     return done(null,false,{message : 'that email is not registered'});
                 }
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}; 