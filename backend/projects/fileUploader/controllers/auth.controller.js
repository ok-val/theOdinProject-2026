import bcrypt from 'bcrypt';
import passport from 'passport';
import * as insertQuery from '../models/insert.query.js';

const renderSignUp = (req, res) => {
  res.render('sign-up', { title: 'Sign up' });
};

const handleSignUp = async (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;
  try {
    const saltHashedPasswd = await bcrypt.hash(password, 10);
    await insertQuery.insertUserByAllFields(
      username,
      firstName,
      lastName,
      saltHashedPasswd
    );
  } catch (error) {
    return next(error);
  }
};

const renderLogIn = (req, res) => {
  res.render('sign-up', { title: 'Sign up' });
};

const handleLogIn = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/log-in-failed/',
  failureMessage: true
});

const handleLogOut = (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    res.redirect('/');
  });
};

export {
  renderSignUp,
  handleSignUp,
  renderLogIn,
  handleLogIn,
  handleLogOut
};
