import express from 'express';
import * as messageController from '../controllers/message.controller.js';

const messageRouter = express.Router();

messageRouter.get('/view', messageController.renderViewMessages);
messageRouter.get('/create', messageController.renderCreateMessage);
messageRouter.post('/create', messageController.handleMessagePost);
messageRouter.delete(
  '/delete/:id',
  messageController.handleMessageDelete
);

export default messageRouter;
