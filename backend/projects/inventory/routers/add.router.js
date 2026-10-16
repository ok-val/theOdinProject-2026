import express from 'express';
import * as addController from '../controllers/add.controllers.js';

const addRouter = express.Router();

addRouter.get('/', addController.getAdd);

addRouter.post('/', addController.postValidatedAdd);

export default addRouter;
