import express from 'express';
import * as usersController from '../controllers/users.controller.js';

const users_router = express.Router();

users_router.get('/', usersController.renderUsersMain);

users_router.get('/:id', usersController.renderUsersPageViaId);

export default users_router;
