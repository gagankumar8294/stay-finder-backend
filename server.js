import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import listingRoutes from './src/features/listings/listings.routes.js';
import userRoutes from './src/features/users/user.routes.js';

const server = express();

server.use(cors()); // ✅ Allow cross-origin requests
// parse application/json
server.use(bodyParser.json())

// requests related to listings, redirect to
server.use('/api/listings', listingRoutes);
server.use('/api/users', userRoutes);

server.use('/', (req, res) => {
    res.send('Welcome to Stay-Finder-backend-Project')
})

server.listen(3200, () => {
    console.log('Server listening http://localhost:3200/')
})