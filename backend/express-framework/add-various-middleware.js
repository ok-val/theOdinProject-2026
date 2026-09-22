import express from 'express';
import morgan from 'morgan';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './express-framework/views');

app.listen(3000, () => {
  // console.log('Server is running on http://localhost:3000');
});

// This is a piece of logger middleware
// app.use((req, res, next) => {
//   console.log('new request made');
//   console.log(req.method);
//   next();
// });

// Express native middleware for exposing static payloads
// - ID the root folder where public files exist
app.use(express.static('express-framework/public'));
// Use the 3rd-party middleware Morgan to log incoming reqs
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
