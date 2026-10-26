import path from 'node:path';
import express from 'express';
import pgSessionReqHandler from './config/pg.session.js';
import passport from 'passport';
// If passport config is offshored, import the entire file
import './config/local.strategy.js';
import authRouter from './routers/auth.router.js';
import messageRouter from './routers/message.router.js';

// TODO: Add admin Delete
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
// Attach currentUser for all views. See './docs/res-locals-vars.md' for more info.
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
// Don't forget to create a session relation using connect-pg-simple method

// Routes
app.use('/auth', authRouter);
app.use('/message', messageRouter);

app.get('/', (req, res) => {
  console.log(req.user);
  res.render('index');
});
