import path from 'node:path';
import pg from 'pg';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env['DATABASE_URL']
});

const LocalStrategy = passportLocal.Strategy;

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
app.use(
  session({ secret: 'cats', resave: false, saveUninitialized: false })
);
app.use(passport.session());

// Route

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sign-up', (req, res) => res.render('sign-up-form'));

app.post('/sign-up', async (req, res, next) => {
  try {
    await pool.query(
      `INSERT INTO users (username, password) VALUES ($1, $2)`,
      [req.body.username, req.body.password]
    );
    res.redirect('/');
  } catch (error) {
    return next(error);
  }
});

// Authentication
// Three Authentication functions are required for the `Username & Password` strategy:

// 1. Query db middleware run by the Strategy class to allow user to log in
// ---- This middleware is NOT handled by the current Router, and thus is the `done` cb to be handled by `passport` later when runs the `passport.authenticate()` method

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // `users.username` must always be UNIQUE and NOT NULL
      const { rows } = await pool.query(
        `SELECT * FROM users WHERE username = $1`,
        [username]
      );
      // Get `users.id`
      const user = rows[0];

      if (!user) {
        return done(null, false, {
          message: 'Incorrect username/Username not found'
        });
      }
      if (user.password != password) {
        return done(null, false, { message: 'Incorrect password' });
      }
      // Send the `user` object to serializeUser ONCE, if login is successful.
      // This callback `done` is the one that ATTACHES info onto `req.user` and thus the session cookie
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// To allow users to stay logged in by creating a session cookie and instruct `passport` what to look for and decode the cookie USING the proper information from the Database, we need to call two functions from `passport`. Here are their following roles:

// (1) passport.serializeUser()
// Here's the needed, extracted user info from the cookie (`req.user`, stored in client's browser). Passport, save it!
// Technically, saves user.id. When a user successfully logs in, it receives the `user` object from `LocalStrategy` ONCE. It then passes the `user.id` to `Passport`, telling it to store that info inside the session.

// (2) passport.deserializeUser()
// Here's the fresh user data from our DB. Passport, attach the whole thing to our next request.
// Technically, fetches the whole `user` on future requests. Wherever our user now goes, Passport figures out who is making the request USING the serialized info (`user.id`) to query the DB on every request for fresh data. In the code pattern, it repeats what `LocalStrategy` does.

// So, for every requests made on the client machine, passport reads the `user.id` from cookie and freshen the user data, maintaining the session.

passport.serializeUser((user, done) => {
  // Extract the data from the cookie (`req.user`) and sends it to `passport.deserializeUser()`
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );
    const user = rows[0];

    // Reattaches fresh user data to cookie (req.user)
    done(null, user);
  } catch (error) {
    done(error);
  }
});
