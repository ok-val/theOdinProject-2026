import express from 'express';

const coreRouter = express.Router();
// This creates a new instance a express.Router object

coreRouter.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });
});

coreRouter.get('/', (req, res) => {
  res.redirect('/home');
});

coreRouter.get('/about', (req, res) => {
  res.render('about', { title: 'Home' });
});

coreRouter.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// export router object for use in the main.js file
export default coreRouter;
