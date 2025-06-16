import listingModel from "./listings.model.js";

export default class listingsController {

    getAllListings(req, res) {
        const listings = listingModel.getListings();
        return res.status(200).send(listings)
    }
}