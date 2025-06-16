import express from 'express';

const server = express();

server.use('/', (req, res) => {
    res.send('Welcome to Stay-Finder-backend-Project')
})

server.listen(3200, () => {
    console.log('Server listening http://localhost:3200/')
})