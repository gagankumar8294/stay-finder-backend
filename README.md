# stay-finder-backend

----  Server.js ----
1. import express package
2. initialize the express
3. Redirecting requests to listing / Users / bookings
4. default handler
5. assign the port | console statement


----  src/features/listings/listings.controller.js  ----
1. created class 
2. getAllListings method to return all the listings
3. getOneListing method to return one listing
4. AddNewListing method to add Listing


----  src/features/listings/listings.routes.js  ----
1. import expres package
2. initialise the express.Router Moduel
4. created Routes and redirecting to certain get / post requests
5. trigring the ceratin  controller method
6. adding middleware in the ost request -> to upload image


----  src/features/listings/listings.model.js  ----
1. class component
2. constructor holds all the properties of the listing
3. satic getAllListings -> returning all listings
4. static addNewListing -> to add listing to the listings
5. static getOneListing -> get One listing based on ID or relevant property based


---- src/middlewares/fileUpload.middleware.js ----
1. import multer
2. configure storage location | filename


----  src/features/users/.js  ----

---- src/middlewares/jwt.middleware.js ----

middleware used to login the user 