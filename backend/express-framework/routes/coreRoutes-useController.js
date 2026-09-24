import express from 'express';
import * as coreController from '../controller/coreController.js';

const coreRouter = express.Router();
// This creates a new instance a express.Router object

coreRouter.get('/home', coreController.home_render);

coreRouter.get('/', coreController.home_redirect);

coreRouter.get('/about', coreController.about_render);

coreRouter.get('/about-us', coreController.about_redirect);

// export router object for use in the main.js file
export default coreRouter;
