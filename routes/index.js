const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        username: req.flash('username'),
        password: req.flash('password')
    });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/applications', (req, res) => {
    req.flash('username', req.body.username);
    req.flash('password', req.body.password);
    res.redirect('/');
});

module.exports = router;