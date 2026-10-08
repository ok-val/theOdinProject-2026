import express from 'express';
import * as indexControllers from '../controllers/index.controller.js';

const indexRouter = express.Router();

indexRouter.get('/', indexControllers.searchUsernames);
indexRouter.get('/', indexControllers.logAvailableUsernames);
indexRouter.get('/new', indexControllers.renderUsernameForm);
indexRouter.post('/new', indexControllers.saveUsernameFormInput);
indexRouter.get('/delete-all', indexControllers.deleteAllUsers);

export default indexRouter;
