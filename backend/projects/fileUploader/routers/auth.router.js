import express from 'express';
import * as authController from '../controllers/auth.controller.js';

const authRouter = express.Router();

// REMINDER:
// An Auth Router requires a GET and POST routes
// for sign-up and log-in, each.
// Passport handles logout providing it's own redirect

authRouter.get('/sign-up', authController.renderSignUp);
authRouter.post('/sign-up', authController.handleSignUp);

authRouter.get('/log-in', authController.renderLogIn);
authRouter.post('/log-in', authController.handleLogIn);

authRouter.get('/log-out', authController.handleLogOut);

export default authRouter;
