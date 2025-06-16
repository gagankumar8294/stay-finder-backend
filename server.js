import express from 'express';
import listingRoutes from './src/features/listings/listings.routes.js';

const server = express();

// requests related to listings, redirect to
server.use('/api/listings', listingRoutes);

server.use('/', (req, res) => {
    res.send('Welcome to Stay-Finder-backend-Project')
})

server.listen(3200, () => {
    console.log('Server listening http://localhost:3200/')
})