//importing dependencies of npm
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser   = require('body-parser');
const helmet = require("helmet");
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');


//importing routes
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');
var indexRouter = require('./routes/index');

//set views and engines
var app = express();


app.use(session({ secret: 'storie', resave: true,
saveUninitialized: true,cookie: { maxAge: 60*60*1000 }}))


//Calling databases
const db = require('./models/index.js')
const sequelize = db.sequelize;
sequelize.authenticate().then(_=>console.log('database connexion is validated'))
.catch(error =>console.error(error));


//set views and engines

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    helmet({
        contentSecurityPolicy: false,
    }));
app.use(cors());


app.use('/admin', adminRouter);
app.use('/index', indexRouter);
app.use('/', loginRouter);
app.all('*',function(req, res){res.redirect('/')})
module.exports = app;

