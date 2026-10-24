import path from 'node:path';
import express from 'express';
import pgSessionReqHandler from './config/pg.session.js';
import passport from 'passport';
// If passport config is offshored, import the entire file
import './config/local.strategy.js';
import authRouter from './routers/auth.router.js';

const app = express();
const localport = 3000;
app.listen(localport, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on ${localport}`);
});

// App view engine setting
app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Passport middleware
app.use(pgSessionReqHandler);
app.use(passport.session());
// Don't forget to create a session relation using connect-pg-simple method

// Routes
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render('index');
});
