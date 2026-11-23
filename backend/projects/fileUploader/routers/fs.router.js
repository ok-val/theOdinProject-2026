import express from 'express';
import * as fsController from '../controllers/fs.controller.js';

const fsRouter = express.Router();

fsRouter.get('/upload', fsController.renderFileUpload);
fsRouter.post('/upload', fsController.handleFileUpload);

fsRouter.get('/create-folder', fsController.renderCreateFolder);
fsRouter.post('/create-folder', fsController.handleCreateFolder);

// The wildcard path segment will return a list
// fsRouter.get('/*dir', fsController.renderFs);
// The splat catch-all will return any path, whole
fsRouter.get('/{*splat}', fsController.renderFs);

export default fsRouter;
