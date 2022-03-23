const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/upload') , 
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})

// initializaction
const app = express();

//settings
app.set('port',3000);


app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join (app.get('views'), 'layouts'),
    partialsDir:path.join (app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');





//Middlewares
app.use(express.urlencoded({extended:false})); //para recibir los datos en modo jason

app.use(myconnection(mysql, {
  host: '198.50.211.237',
  user: 'flashpoi_euro',
  password: 'Javieroca123-',
  port: 3306,
  database: 'flashpoi_remesafintech'
}, 'single'));

app.use(multer({
  storage: storage,
  dest: path.join(__dirname, 'public/upload')
}).single('image'));









//routes
app.get('/', (req,res) => {
    res.render('index');
});




app.post('/add', async (req,res) => {
    const data  = req.body;
    await req.getConnection((error, conn) => {
      conn.query('INSERT INTO registro set ?', [data], (error, rows) => {
        console.log(rows);
        res.redirect('/gracias');
      })
    })
});




app.get('/marketing', (req,res) => {
    res.render('marketing');
});






app.get('/compra', (req,res) => {
    res.render('compra');
});





app.post('/upload', async (req,res) => {
    const data  = req.body;
   await req.getConnection((error, conn) => {
      conn.query('INSERT INTO registro set ?', [data], (error, rows) => {
        console.log(rows);
        res.redirect('/pago')
      })
    })
});






app.get('/contacto', (req,res) => {
    res.render('contacto');
});





app.get('/pago', (req,res) => {
    res.render('pago');
});





app.get('/gracias', (req,res) => {
    res.render('gracias');
});






app.get('/registro', (req,res) => {
    res.render('registro');
});






app.post('/add1', async (req,res) => {
    const data  = req.body;
    await req.getConnection((error, conn) => {
      conn.query('INSERT INTO registro ?', [data], (error, rows) => {
        console.log(rows);
        res.redirect('/gracias');
      })
    })
});






app.get('/trading', (req,res) => {
    res.render('trading');
});

app.get('/trading/nivel1', (req,res) => {
    res.render('nivel1');
});

app.get('/trading/nivel2', (req,res) => {
    res.render('nivel2');
});

app.get('/trading/nivel3', (req,res) => {
    res.render('nivel3');
});

app.get('/senales', (req,res) => {
    res.render('senales');
});

app.get('/compranvl1', (req,res) => {
    res.render('compranvl1');
});

app.get('/compranvl2', (req,res) => {
    res.render('compranvl2');
});

app.get('/compranvl3', (req,res) => {
    res.render('compranvl3');
});

app.get('/compra', (req,res) => {
    res.render('compra');
});

app.get('/compra', (req,res) => {
    res.render('compra');
});

app.get('/oferta', (req,res) => {
    res.render('oferta');
});










//Static Files
app.use(express.static(path.join(__dirname, 'public')));


//listening
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});



module.exports = app;
