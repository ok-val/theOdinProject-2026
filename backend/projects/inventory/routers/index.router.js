import express from 'express';
import * as indexController from '../controllers/index.controller.js';

const indexRouter = express.Router();

indexRouter.get('/', indexController.getIndex);

export default indexRouter;
