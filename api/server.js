const express = require('express');
const cors = require('cors');
const Users = require('./users-model');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send(`<h1>${process.env.MESSAGE}</h1>`)
})

server.get('/api/hello', (req,res) => {
    res.send({ message: 'hello from api!'})
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.get('/api/users', (req, res) => {
    Users.findAll()
    .then(result => {
        res.json(result);
    })
})

module.exports = server