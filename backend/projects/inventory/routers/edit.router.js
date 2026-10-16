import express from 'express';
import * as editController from '../controllers/edit.controller.js';

const editRouter = express.Router();

editRouter.get('/', editController.getEdit);

editRouter.post('/', editController.postValidatedEdit);

export default editRouter;
