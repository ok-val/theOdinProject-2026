import express from 'express';
import * as messageController from '../controllers/message.controller.js';

const messageRouter = express.Router();

messageRouter.get('/', messageController.renderViewMessages);
