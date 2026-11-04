import passportLocal from 'passport-local';
import passport from 'passport';
import bcrypt from 'bcrypt';
// TODO: add read.query.js
import * as readQueries from '../models/read.query.js';

const LocalStrategy = passportLocal.Strategy;

// Add passport authentication function
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const rows = await readQueries.readUserByUsername(username);
      const user = rows[0];
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username'
        });
      }

      const isPasswordMatched = await bcrypt.compare(
        password,
        user.password
      );
      if (!isPasswordMatched) {
        return done(null, false, {
          message: 'Incorrect password'
        });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Add passport serialize function
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Add passport deserialize function
passport.deserializeUser(async (id, done) => {
  try {
    const rows = await readQueries.readUserById(id);
    const user = rows[0];
    done(null, user);
  } catch (error) {
    done(error);
  }
});
