import passportLocal from 'passport-local';
import passport from 'passport';
import bcrypt from 'bcrypt';
import * as readQueries from '../models/read.query.js';

const LocalStrategy = passportLocal.Strategy;

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
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const rows = await readQueries.readUserById(id);
    const user = rows[0];
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Passport is already a singleton: The configs in here already have side-effects on the passport object so these configs apply wherever passport is imported to. No need to export! How convenient!
// via app.js, import the whole file
