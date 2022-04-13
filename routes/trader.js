const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');




router.get('/binancekiller', isLoggedIn, (req,res) => {
    res.render('traders/binancekiller');
});

router.get('/tradinglatino', isLoggedIn, (req,res) => {
    res.render('traders/latino');
});

router.get('/tradinglatinohold', isLoggedIn, (req,res) => {
    res.render('traders/latinohold');
});

router.get('/tradinglatino1d', isLoggedIn, (req,res) => {
    res.render('traders/latino1d');
});

router.get('/tradinglatino4h', isLoggedIn,(req,res) => {
    res.render('traders/latino4h');
});

router.get('/bitcoinbullet', isLoggedIn, (req,res) => {
    res.render('traders/bitcoinbullet');
});

router.get('/russian', isLoggedIn, (req,res) => {
    res.render('traders/russian');
});

router.get('/senales', isLoggedIn, (req,res) => {
    res.render('traders/inicio_traderssenales');
});


module.exports = router;