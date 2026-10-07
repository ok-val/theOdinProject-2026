import express from 'express';
import * as indexControllers from '../controllers/index.controller.js';

const indexRouter = express.Router();

indexRouter.get('/', indexControllers.logAvailableUsernames);
indexRouter.get('/new', indexControllers.renderUsernameForm);
indexRouter.post('/new', indexControllers.saveUsernameFormInput);

export default indexRouter;
