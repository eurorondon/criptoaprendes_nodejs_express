const express= require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('./trading/trading');
});

router.get('/nivel1', (req,res) => {
    res.render('./trading/nivel1');
});

router.get('/nivel2', (req,res) => {
    res.render('./trading/nivel2');
});

router.get('/nivel3', (req,res) => {
    res.render('./trading/nivel3');
});

router.get('/nivel1/compranvl1', (req,res) => {
    res.render('./trading/compranvl1');
});

router.get('/nivel2/compranvl2', (req,res) => {
    res.render('./trading/compranvl2');
});

router.get('/nivel3/compranvl3', (req,res) => {
    res.render('./trading/compranvl3');
});

module.exports=router;