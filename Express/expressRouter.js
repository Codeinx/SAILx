const express = require('express');
const router = express.Router();

router.get('/name', (req, res)=> {
    res.send('This is the name DIR in expressRouter')
});

router.get('/names', (req, res)=> {
    res.redirect('/customer/create')
});

module.exports = router;