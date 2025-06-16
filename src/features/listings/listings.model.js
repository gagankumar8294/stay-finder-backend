export default class listingModel {

    constructor(id , name, description, price, imageUrl) {

        this.id = id;
        this.name = name;
        this. description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    static getListings() {
        return Listings;
    }
}

var Listings = [
    new listingModel(
        1,
        "Cozy Apartment in Bangalore",
        "A peaceful 2BHK apartment located near the city center. Great for remote workers and families.",
        1500,
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ),
    new listingModel(
        2,
        "Luxury Villa in Goa",
        "Experience luxury with this beautiful 3BHK villa with a private pool just 5 minutes from the beach.",
        3500,
        "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80"
    ),
    new listingModel(
        3,
        "Budget Room in Delhi",
        "Affordable single room perfect for short stays. Close to metro and shopping centers.",
        800,
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
    )
]