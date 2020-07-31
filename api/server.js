const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter');
const plantsRouter = require('../plants/plantsRouter');
const userRouter = require('../users/userRouter');
 
const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/plants', plantsRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.status(200).json({ API: 'Running... ' });
});

module.exports = server;