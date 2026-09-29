/**
 * Express router (express.Router) is an Object as a middleware instance
 * that isolates middlewares and routes. Its main purpose is to break
 * down large Express.js codebases into modular, distinct files.
 *
 * This is often referred to as a _mini-app_
 */

/**
 * See this and files in './routes/` for this tutorial
 */

import express from 'express';
import morgan from 'morgan';

import coreRouter from './routes/coreRoutes.js';
import blogRouter from './routes/blogRoutes.js';

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

// Use the router object like a middleware
app.use(coreRouter);

/**
 * Using param dict signal handles routes starting with `/blogs`
 * which requires changes in the inner paths. The upside to using a
 * params dict is better modularity for larger route sets and reduce
 * potential bugs in route naming.
 */
app.use('/blogs', blogRouter);

/**
 * Note that 404 handling should not be in the mini-apps because it will
 * return early
 */
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404 error' });
// });

app.get('/{*splat}', (req, res) => {
  res.status(404).render('404', { title: '404 error' });
});
