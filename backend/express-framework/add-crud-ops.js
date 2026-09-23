import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Blog from './model/blog.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(
    process.cwd(),
    'express-framework/config/atlas-credentials.env'
  )
});

const app = express();

const MYDBCRED = process.env.MONGODB_URI + '/?appName=serve-blogs';

// DB CONNECTION
try {
  mongoose.connect(MYDBCRED).then((res) => {
    app.listen(3000);
  });
} catch (error) {
  console.log(error);
}

// IMPORT MIDDLEWARE SETTINGS
app.set('view engine', 'ejs');
app.set('views', './express-framework/views');
app.use(express.static('./express-framework/public'));
app.use(morgan('dev'));
/**
 * This piece of Middleware is mandotory for parsing the req body the
 * submitted data from OTHER routes
 */
app.use(express.urlencoded({ extended: true }));
// end

app.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a blog' });
});

app.post('/blogs/create', async (req, res) => {
  // console.log(req.body.title);
  try {
    await Blog.create({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    });
    res.redirect('/blogs/create');
  } catch (error) {
    console.error(error);
    res.redirect('/404');
  }
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
  res.status(404).render('404', { title: 'error' });
});

app.use((req, res) => {
  res.redirect('/404');
});
