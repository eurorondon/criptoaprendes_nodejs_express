const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const multer = require('multer');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const validator = require('express-validator');
const morgan = require('morgan');


//app.use(validator());

const { database } = require('./keys');


// initializaction
const app = express();
require('./lib/passport');

//settings
app.set('port',3000);

app.use(myconnection(mysql, {
  host: '198.50.211.237',
  user: 'flashpoi_euro',
  password: 'Javieroca123-',
  port: 3306,
  database: 'flashpoi_remesafintech'
}, 'single'));


app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join (app.get('views'), 'layouts'),
    partialsDir:path.join (app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/trade') , 
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})





//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false})); //para recibir los datos en modo jason

app.use(multer({
  storage: storage,
  dest: path.join(__dirname, 'public/trade')
}).single('image'));

app.use(session({
  secret: 'faztmysqlnodemysql',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



// Global variables
app.use((req, res, next) => {
  app.locals.message = req.flash('message');
  app.locals.success = req.flash('success');
  app.locals.user = req.user;
  next();
});


// Static files
app.use(express.static(path.join(__dirname, 'public')));






//routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));













//Static Files
app.use(express.static(path.join(__dirname, 'public')));


//listening
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});



module.exports = app;
