import express from 'express';
import listingsController from './listings.controller.js';
import { upload } from '../../middlewares/fileUpload.middleware.js';

const ListingsController = new listingsController();

const listingRoutes = express.Router();

listingRoutes.get('/', ListingsController.getAllListings);
listingRoutes.post('/', upload.single('imageUrl') , ListingsController.addListing);
listingRoutes.get('/:id', ListingsController.getOneListing);

export default listingRoutes;