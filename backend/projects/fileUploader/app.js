import path from 'node:path';
import express from 'express';
import { prismaSession } from './lib/prisma.js';
import passport from 'passport';
import './authentication/local.strategy.js';
// import authRouter from './routers/auth.router.js';

// Set up http server
const app = express();
const localport = 3000;
app.listen(localport, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on ${localport}`);
});

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));

// Set static path and req.body
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Set up Passport middleware
app.use(prismaSession);
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// Add
app.get('/', (req, res) => {
  console.log(res.locals.currentUser);
  res.send('Home');
});
