const express= require('express');
const router = express.Router();
import { isLoggedIn } from "../lib/auth";

router.get('/binancekiller',isLoggedIn, (req,res) => {
    res.render('./trader/binancekiller');
});

router.get('/tradinglatino', isLoggedIn, (req,res) => {
    res.render('./trader/latino');
});

router.get('/tradinglatino/hold', isLoggedIn,(req,res) => {
    res.render('./trader/latinohold');
});

router.get('/tradinglatino/diario', isLoggedIn,(req,res) => {
    res.render('./trader/latino1d');
});

router.get('/tradinglatino/4horas',isLoggedIn, (req,res) => {
    res.render('./trader/latino4h');
});

router.get('/bitcoinbullet',isLoggedIn, (req,res) => {
    res.render('./trader/bitcoinbullet');
});

router.get('/alwayswin',isLoggedIn, (req,res) => {
    res.render('./trader/alwayswin');
});


module.exports=router;