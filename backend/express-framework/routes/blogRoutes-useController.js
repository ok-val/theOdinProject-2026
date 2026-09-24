import express from 'express';
import * as blogController from '../controller/blogController.js';

const blogRouter = express.Router();

/**
 * The core idea for implementing a controller is that, the route
 * handlers' callbacks are decoupled from the handlers themselves.
 *
 * Such that, it exists a separate controller file for all the
 * functionalities for this particular route param.
 */

blogRouter.use(express.urlencoded({ extended: true }));

blogRouter.get('/', blogController.blog_index);

blogRouter.get('/create', blogController.blog_create_get);

blogRouter.post('/create', blogController.blog_create_post);

blogRouter.get('/:id', blogController.blog_details);

blogRouter.delete('/:id', blogController.blog_delete);

export default blogRouter;
