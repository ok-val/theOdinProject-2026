import path from 'node:path';
import pg from 'pg';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
// Prefer bcrypt for every thing password-related: Modern standard
import bcrypt from 'bcrypt';
import pgSimple from 'connect-pg-simple';

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env['DATABASE_URL']
});

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

// Create pgSession from connect-pg-simple
const pgSession = pgSimple(session);

// Passport middleware
const LocalStrategy = passportLocal.Strategy;
app.use(
  session({
    store: new pgSession({
      pool: pool
      // Other custom options could be set after this
    }),
    secret: 'cats',
    resave: false,
    // Important: Do not save uninitialized sessions
    saveUninitialized: false,
    // This cookie is going to attached in the res.headers as the set-cookies header
    // Set a cookie maxAge of 2 days
    cookie: { maxAge: 2 * 60 * 60 * 1000 }
  })
);

app.use(passport.session());
// From here on, the session will inspectable via `req.session`.
// The `req.user` will also be the same.
// Additional methods such as `isAuthenticated()` are also available.
// See the next immediate route.

// Route
app.get('/', (req, res) => {
  // the `req.session` could contain any object as we want
  console.log(req.session);
  // the `req.user` is available now
  res.render('index', { user: req.user });
});
app.get('/sign-up', (req, res) => {
  if (req.isAuthenticated()) {
    // Funny Bug: So I forgot to add return here once and saw that res.send() was already sending back part of the string right before the next res handler throws an error.
    return res.send('You are already logged-in');
  }
  res.render('sign-up-form');
});

// bcrypt.hash() user password when storing inside DB
app.post('/sign-up', async (req, res, next) => {
  try {
    // Technique 2: Auto-gen and salt a hash
    // Salting involves addings extra random chars in the mix. See more in docs.
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await pool.query(
      `INSERT INTO users (username, password) VALUES ($1, $2)`,
      [
        req.body.username,
        // req.body.password,
        hashedPassword
      ]
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
  // The anon fn passed into LocalStrategy is called the Verify Callback
  new LocalStrategy(async (username, password, done) => {
    // Within the Verify Callback, we define the auth logics here:
    // 1. Query DB for userID using username, Extract it
    // 2. If not found, the exit strat is to return `done` with user?: false
    // 3. Proceed with `done` with user?: user. Yes, the whole object.
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
      // Post bcrypt implementation, I cannot compare literal strings anymore
      // if (user.password != password) {
      //   return done(null, false, { message: 'Incorrect password' });
      // }

      // Instead, I must compare passwords with bcrypt:
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
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
  // serialization will block the stack :)
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );
    const user = rows[0];

    // Rebuilds fresh user data to (req.user)
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Finally, tell app to use my Passport middleware as I've set it up
app.post(
  '/log-in',
  // Use Passport like another middleware
  // For custom actions, simply leave the options out to add custom redirects or whatnot
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureMessage: true
  })
);

// To sum, `passport.authenticate()` does the following:
// 1. Runs `LocalStrategy` function to match `username` and `password`
// 2. Creates a session cookie that gets stored in the Client's browser
// 3. For all future requests, rechecks the auth details and updates the cookie
// 4. Redirects based on auth status (success or failure)

// Finally, I must add a log out option for the user as well.
// Conveniently, Passport adds a .logout method for the `req` object as well
// Other QoL req methods also attached by Passport is `req.isAuthenticated()`
// See the file `request.js` in the official git repo to see how this was implemented.
app.get('/log-out', (req, res, next) => {
  console.log(req.isAuthenticated()); // true
  req.logout((error) => {
    if (error) {
      return next(err);
    }
    console.log(req.isAuthenticated()); // false
    res.redirect('/');
  });
});
