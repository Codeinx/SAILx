const express = require('express')
const server = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')

server.use(morgan('tiny'))
server.use(bodyParser.urlencoded({extended:true}))

dotenv.config({path: 'settings.env'})
const PORT = process.env.PORT || 2024

server.set('view engine', 'ejs')

server.get('/', (req, res)=> {
    res.render('index')
})

server.listen(PORT, 'localhost', ()=> {
    console.log((`Server listening on port http://localhost:${PORT}`));
})