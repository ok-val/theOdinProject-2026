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
    const user = await insertQuery.insertUserByAllFields(
      username,
      firstName,
      lastName,
      saltHashedPasswd
    );
    await insertQuery.insertFolderByNameOwneridParentidPath(
      // All user root folder is enforced the name root.
      // Dont't let user rename root
      'root',
      user.id,
      'root'
    );
    res.redirect('/auth/log-in');
  } catch (error) {
    return next(error);
  }
};

const renderLogIn = (req, res) => {
  res.render('log-in', { title: 'Log in' });
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
