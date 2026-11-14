import express from 'express';
import * as folderController from '../controllers/folder.controller.js';

const folderRouter = express.Router();

folderRouter.get('/', folderController.renderUserFolders);
folderRouter.post('/', folderController.handleFolderCreate);

export default folderRouter;
