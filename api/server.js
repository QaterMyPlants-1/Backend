const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter');
 
const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan());
server.use(helmet());

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.status(200).json({ API: 'Running... '});
});

module.exports = server;