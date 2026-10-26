import bcrypt from 'bcrypt';
import passport from 'passport';
import * as insertQuery from '../models/insert.query.js';

const renderSignUp = (req, res) => {
  res.render('sign-up', { title: 'Sign Up' });
};

const renderLogIn = (req, res) => {
  res.render('log-in', { title: 'Log In' });
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
    res.redirect('sign-up--success');
  } catch (error) {
    return next(error);
  }
};

const handleLogIn = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/log-in-failed',
  failureMessage: true
});

const handleLogOut = (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(err);
    }
    res.redirect('/');
  });
};

export {
  renderLogIn,
  renderSignUp,
  handleSignUp,
  handleLogIn,
  handleLogOut
};
