import express from 'express';
import UserController from './user.controller.js';

const userController = new UserController();

const userRoutes = express.Router();

userRoutes.post('/signup', userController.singUp);
userRoutes.post('/signin', userController.signIn);

export default userRoutes;