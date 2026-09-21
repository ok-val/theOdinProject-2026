import express from 'express';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './express-framework/views');

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

app.use((req, res) => {
  res.status(404).render('404');
});
