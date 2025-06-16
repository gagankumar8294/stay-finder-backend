import express from 'express';
import listingsController from './listings.controller.js';

const ListingsController = new listingsController();

const listingRoutes = express.Router();

listingRoutes.get('/', ListingsController.getAllListings);

export default listingRoutes;