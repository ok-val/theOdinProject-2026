import express from 'express';
import * as deleteController from '../controllers/delete.controller.js';

const deleteRouter = express.Router();

deleteRouter.delete('/', deleteController.deleteData);

export default deleteRouter;
