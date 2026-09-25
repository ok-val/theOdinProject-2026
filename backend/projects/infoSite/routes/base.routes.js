import express from 'express';
import * as base_controller from '../controllers/base.controller.js';

const base_router = express.Router();

base_router.get('/', base_controller.render_home);

export default base_router;
