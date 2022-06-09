const express = require('express');
const cors = require('cors');

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

module.exports = server