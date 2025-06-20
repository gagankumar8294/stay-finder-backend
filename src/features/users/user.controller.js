import Jwt from "jsonwebtoken";
import userModel from "./user.model.js";


export default class UserController {

    singUp(req, res) {
        const { name, email, password, type } = req.body;
        const user = userModel.SignUp(name, email, password, type);
        res.status(201).send(user)
    }

    signIn(req, res) {
        const result = userModel.SignIn(
            req.body.email,
            req.body.password,
        )
        if(!result) {
            return res.status(401).send('Incorrect credentials');
        } else {
            // 1. Create token
            const token = Jwt.sign(
            {
                userID: result.id,
                email: result.email,
            }, 
            "anq73ArWBT",
            {
                expiresIn: '1h',
            });

            // 2. Send token
            return res.status(200).send(token);
        }
    }
}