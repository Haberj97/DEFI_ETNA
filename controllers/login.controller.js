var express = require('express');
var router = express.Router();
var request = require('request-promise');
var request = require('request');
const { cookie } = require('request-promise');
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const session = require('express-session');
const passport = require('passport');
const flash = require("message-flash");
const passportLocal = require('passport-local');
const allDev = [ 'coste_c', 'hamia_r', 'habert_j', 'giraul_a' ]
exports.checkEtnaLogin = function (req, res, next) {

  const { login, password } = req.body
  var headerCookie, userId, userInfo, userFirstname, userLastname, userEmail, userLogin, userRole;
  var userExist = 0;

  function getDataUser() {

    var cookieJar = request.jar();

    var options = {

      uri: 'https://auth.etna-alternance.net/identity',
      method: 'POST',
      json: {
        "login": login,
        "password": password
      },
      jar: cookieJar,
    };

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {

        userId = body.id

        arr = JSON.stringify(cookieJar).split(":")
        tempo = JSON.stringify(arr[7]).split(",")
        tempo = tempo[0]

        tempo = tempo.replace('"', '').replace('"', '').replace('"', '').replace('\\', '').replace('\\', '');

        headerCookie = 'authenticator=' + tempo

      }
    });

    setTimeout(getInfo, 300);

    function getInfo() {

      //Debug
      //userId = 'carra_c'

      var options = {
        uri: 'https://auth.etna-alternance.net/api/users/' + userId,
        method: 'GET',
        host: 'auth.etna-alternance.net',
        headers: {
          "Cookie": headerCookie,
        }
      };

      request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {

          userInfo = JSON.parse(body)

          userFirstname = userInfo["firstname"]

          userLastname = userInfo["lastname"]

          userLogin = userInfo["login"]

          userEmail = userInfo["email"]

          userRole = userInfo["roles"].includes('adm');

          userTest = allDev.includes(userLogin)

          if (login == userLogin && (userRole || userTest)) { userExist = 1; } else { console.log(userLogin + " Essaye d'acceder au site")}

        } else {
          console.log("Error:" + error)
          console.log("Body: " + body)
        }
      });
    }

    setTimeout(returnValue, 500);


    function returnValue() {
      console.log(session);
      if (userExist == 1) {

        async function checkdatabase() {
          const { login } = req.body
          const alreadyexistUser = await User.findOne({ where: { login } }).catch(err => { console.log("error :" + err) })
          if (alreadyexistUser) {
            req.session.isAdmin = alreadyexistUser.isAdmin;
            req.session.loggedin = true;
            req.session.login = login;
            req.session.cookieEtna = headerCookie

            return res.redirect('/index')
          }
          // const salt =  await bcrypt.genSalt(10)
          const newUser = new User({ login })
          // newUser.password =  await bcrypt.hash(newUser.password,salt)
          const savedUser = await newUser.save().catch((err) => {
            console.error(err);
            res.json("error : " + err + " Cannot register user at the moment ")

          });
          if (savedUser) {
            req.session.isAdmin = false;
            req.session.loggedin = true;
            req.session.login = login;
            req.session.cookieEtna = headerCookie
            return res.redirect('/index')

          }

        }


        checkdatabase();


      } else { res.json("Something is wrong maybe an issue with your Etna login or password") }
    }


  }

  getDataUser()
}






