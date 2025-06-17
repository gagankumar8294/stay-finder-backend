import listingModel from "./listings.model.js";

export default class listingsController {

    getAllListings(req, res) {
        const listings = listingModel.getListings();
        return res.status(200).send(listings)
    }

    getOneListing(req, res) {
        const id = req.params.id;
        const listing = listingModel.getOneListing(id);
        if(!listing) {
            res.status(404).send("Listing not found")
        } else {
            return res.status(200).send(listing);
        }
    }

    addListing(req, res) {
        const { name , description, price } = req.body;
        const newListing = {
            name,
            description,
            price: parseFloat(price),
            imageUrl : req.file.filename,
        }
        const createdListing = listingModel.addListing(newListing);
        res.status(201).send(createdListing);
    }
}