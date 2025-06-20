import Jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {

    // 1. Read the token
    const token = req.headers['authorization'];

    // 2. if no token, return the error
    if (!token) {
        return res.status(401).send('unauthorized');
    }

    // 3. check if token is valid.
    try {
        const payload = Jwt.verify(token, "anq73ArWBT");
        console.log(payload);
    } catch (err) {
        // 4. return Error
        return res.status(401).send('Unauthorized')
    }

    // 5. call next middleware.
    next();
}

export default jwtAuth;