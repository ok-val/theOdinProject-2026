import express from 'express';
import * as fileController from '../controllers/file.controller.js';

const fileRouter = express.Router();

fileRouter.get('/upload', fileController.renderFileUpload);
fileRouter.post('/upload', fileController.handleFileUpload);

export default fileRouter;
