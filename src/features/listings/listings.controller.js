export default class listingsController {

    getAllListings(req, res) {
        res.status(200).send('Listings');
    }
}