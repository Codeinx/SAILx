const express = require('express');
const router = express.Router();

const customers = []

router.get('/', (req, res)=> {
    res.send('This is the root DIR of customer Route')
});

router.get('/create', (req, res)=> {
    const {name, age, nick} = req.body
    const data = {
        name: name,
        age: age,
        nick: nick
    }
    customers.push(data);
    console.log(customers);
    res.status(400).send(data);
});

router.get('/update', (req, res)=> {
    res.send('This is the update DIR of customer Route')
});


module.exports = router;