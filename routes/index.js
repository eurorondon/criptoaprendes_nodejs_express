const {Router} = require('express')
const router = Router();

const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');





router.get('/', (req,res) => {
    res.render('index')
});

router.post('/add', async (req,res) => {
    const data  = req.body;
    await req.getConnection((error, conn) => {
      conn.query('INSERT INTO registro set ?', [data], (error, rows) => {
        console.log(rows);
        res.redirect('/gracias');
      })
    })
});

router.post('/upload', async (req,res) => {
    const data  = req.body;
   await req.getConnection((error, conn) => {
      conn.query('INSERT INTO registro set ?', [data], (error, rows) => {
        console.log(rows);
        res.redirect('/pago')
      })
    })
});


router.get('/contacto', (req,res) => {
    res.render('contacto');
});

router.get('/pago', (req,res) => {
    res.render('pago');
});


router.get('/gracias', (req,res) => {
    res.render('gracias');
});


router.get('/registro', (req,res) => {
    res.render('registro');
});

router.post('/add1', async (req,res) => {
    const data  = req.body;
    await req.getConnection((error, conn) => {
      conn.query('INSERT INTO registro ?', [data], (error, rows) => {
        console.log(rows);
        res.redirect('/gracias');
      })
    })
});


router.get('/trading', (req,res) => {
    res.render('trading');
});

router.get('/trading/nivel1', (req,res) => {
    res.render('nivel1');
});

router.get('/trading/nivel2', (req,res) => {
    res.render('nivel2');
});

router.get('/trading/nivel3', (req,res) => {
    res.render('nivel3');
});

router.get('/senal', (req,res) => {
    res.render('senal');
});

router.get('/compranvl1', (req,res) => {
    res.render('compranvl1');
});

router.get('/compranvl2', (req,res) => {
    res.render('compranvl2');
});

router.get('/compranvl3', (req,res) => {
    res.render('compranvl3');
});


router.get('/oferta', (req,res) => {
    res.render('oferta');
});






module.exports = router;

