const express= require('express');
const router = express.Router();

// Routes

router.post('/add', async (req,res) => {
    const data  = req.body;
        await req.getConnection((error, conn) => {
            conn.query('INSERT INTO registro set ?', [data], (error, rows) => {
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


router.get('/senal', (req,res) => {
    res.render('senal');
});



router.get('/oferta', (req,res) => {
    res.render('oferta');
});
export default router;