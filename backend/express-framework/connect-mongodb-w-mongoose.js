// Source:
// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Blog from './model/blog.js';

// INTEGRATE .ENV VARIABLES
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(
    process.cwd(),
    'express-framework/config/atlas-credentials.env'
  )
});
// end

const app = express();

// Connect MongoDB
const MYDBCRED = process.env.MONGODB_URI + '/?appName=serve-blogs';

mongoose
  .connect(
    MYDBCRED
    // database name?:
    // {dbName: 'serve-blogs'}
  )
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

/**
 * This one step is convenient for simple, direct data saving.
 */

// The syntax above is a wrapper for the legacy two-step:
// const article = new Blog({
//   title: 'New post',
//   author: 'Orio',
//   content: 14
// })
// article.save();

/**
 * The two-step process, however, is applicable for when I want to
 * manipulate the documenta data further before saving to MongoDB.
 */

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

// ADDING A ROUTE FOR SAVING DOCUMENTS
app.get('/add-blog', async (req, res) => {
  try {
    await Blog.create({
      title: 'New post 2',
      author: 'Orio',
      content: 'The brown fox jumps over the black sheep.'
    });
  } catch (error) {
    console.error(error);
  } finally {
    res.send('<p>Your post have been saved</p>');
  }
});
//end

// FINDING DATA BY ID
// let articleFound;
// await Blog.findById('6ab2ebb29fb089f41000b990')
//   .then((res) => {
//     articleFound = res;
//   })
//   .finally(() => {
//     console.log(articleFound);
//   });

// const articleFound = await Blog.findById(
//   '6ab2ebb29fb089f41000b990'
// ).exec();

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

// ROUTE FOR FINDING ALL DOCS
app.get('/get-all-blogs', async (req, res) => {
  try {
    // find inside a Collection
    const docs = await Blog.find().exec();
    res.send(docs);
  } catch (err) {
    console.error(err);
    res.redirect('/404');
  }
});

// ROUTE FOR FINDING SINGLE DOC
app.get('/get-blog-by-id', async (req, res) => {
  try {
    const docFound = await Blog.findById(
      '6ab3ff268d68ecb99b745a09'
    ).exec();
    res.send(docFound);
  } catch (err) {
    console.error(err);
    res.redirect('/404');
  }
});
// end

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

app.get('/blogs', async (req, res) => {
  try {
    // This find has a sort attached to it
    const blogs = await Blog.find().sort({ createdAt: -1 }).exec();
    res.render('blogs', { title: 'Blogs', blogs: blogs });
  } catch (err) {
    console.error(err);
    res.redirect('404');
  }
});

app.get('/404', (req, res) => {
  res.status(404).render('404');
});

app.use((req, res) => {
  res.redirect('/404');
});
