// Source:
// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Blog from './model/Blog.js';

// Integrate .env vars
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(
    process.cwd(),
    'express-framework/atlas-credentials.env'
  )
});
// end

const app = express();

// Connect MongoDB
const MYDBCRED = process.env.MONGODB_URI + '/?appName=serve-blogs';
mongoose
  .connect(MYDBCRED)
  .then((res) => {
    // server to start listening after this connection is established
    app.listen(3000);
  })
  .catch((err) => console.log(err));
// end

// CREATING A NEW DOCUMENT FROM SCHEMA
// const article = await Blog.create({
//   title: 'New post',
//   author: 'Orio',
//   content: 14
// });
// console.log('article created');

// On MongoDB, we can see that an document has been created from the Schema
/**
 * _id: ObjectId('6ab2ebb29fb089f41000b990')
 * title: "New post"
 * author: "Orio"
 * content: "14"
 * createdAt: ISODate('2026-09-22T20:57:22.989+00:00')
 * updatedAt: ISODate('2026-09-22T20:57:22.989+00:00')
 * __v: 0
 */
// end

// FINDING DATA BY ID

// let articleFound;

// await Blog.findById('6ab2ebb29fb089f41000b990')
//   .then((res) => {
//     articleFound = res;
//   })
//   .finally(() => {
//     console.log(articleFound);
//   });

const articleFound = await Blog.findById(
  '6ab2ebb29fb089f41000b990'
).exec();

/**
 * By default, Mongoose queries return THENABLES (Promise-like objects
 * that accept the methods .then-catch-finally()), meaning that it's not
 * a complete Promise. To return a complete promise, use the method
 * .exec().
 *
 * This means that: This line of code works the same as the above
 * const articleFound = await Blog.findById('6ab2ebb29fb089f41000b990');
 *
 * However, .exec() is usually recommended for better stack tracing
 */

console.log(articleFound);

app.set('view engine', 'ejs');
app.set('views', './express-framework/views');

app.use(express.static('express-framework/public'));
app.use(morgan('dev'));

app.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use((req, res) => {
  res.status(404).render('404');
});
