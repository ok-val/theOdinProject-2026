/**
 * See this and files in './controller/` for this tutorial
 */

/**
 * The core idea for implementing a Controller or factoring for a MVC
 * pattern is that: the route handlers' callbacks are decoupled from the
 * handlers themselves.
 *
 * Such that, it exists a separate controller file for all the
 * functionalities for a particular route param.
 */

/**
 * As a data flow overview, the requests that comes in to this server.js
 * file is routed to the corresponding routes using express.Router.
 *
 * Then, route handlers call from a *Controller.js file that contains
 * the callback
 */

/**
 * With all the implementations from views, model, and controller, we
 * now have a complete MVC refactor.
 */

import express from 'express';
import morgan from 'morgan';

import coreRouter from './routes/coreRoutes-useController.js';
import blogRouter from './routes/blogRoutes-useController.js';

import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';

dotenv.config({
  path: path.resolve(
    process.cwd(),
    'express-framework/config/atlas-credentials.env'
  )
});

const MYDBCRED = process.env.MONGODB_URI + '/?appName=serve-blogs';
const app = express();

try {
  mongoose.connect(MYDBCRED).then((res) => {
    app.listen(3000);
  });
} catch (error) {
  console.error(error);
}

app.set('view engine', 'ejs');
app.set('views', './express-framework/views');
app.use(express.static('./express-framework/public'));
// app.use(morgan('dev'));

app.use(coreRouter);

app.use('/blogs', blogRouter);

app.use((req, res) => {
  res.status(404).render('404', { title: '404 error' });
});
