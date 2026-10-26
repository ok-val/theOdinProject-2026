import express from 'express';
import * as authController from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.get('/sign-up', authController.renderSignUp);
authRouter.post('/sign-up', authController.handleSignUp);

authRouter.get('/log-in', authController.renderLogIn);
authRouter.post('/log-in', authController.handleLogIn);

authRouter.get('/log-out', authController.handleLogOut);

export default authRouter;
