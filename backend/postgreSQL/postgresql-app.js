import express from 'express';
import path from 'node:path';
import indexRouter from './routers/index.router.js';

const app = express();
const localPort = 3000;

app.listen(localPort, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on ${localPort}`);
});

// App view engine setting
app.set('view engine', 'ejs');

// Absolute paths are needed for debugging
app.set('views', path.join(import.meta.dirname, 'views'));
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// App static files setting
app.use(express.static('public'));

app.use('/', indexRouter);

// Catch middleware errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err);
});
