const express = require('express');
const route = require('./route');
const router = require('./expressRouter')
const customer = require('./customer')
const server = express();
const PORT = 3030;

route(server)
server.use(router)
server.use(express.json())
server.use('/customer', customer)

server.get('/', (req, res)=> {
    res.send('You are in the home DIR')
})

server.all('*', (req, res)=> {
    res.status(404).send(JSON.stringify('Wahala Wahala!'))
})

server.listen(PORT, 'localhost', ()=> {
    console.log((`Server listening on port ${PORT}`));
})