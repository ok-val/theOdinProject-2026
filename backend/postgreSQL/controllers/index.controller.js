import * as db from '../db/queries.js';

const logAvailableUsernames = async (req, res) => {
  const searchRes = await db.getAllUsernames();
  const usernames = searchRes.map((user) => user.username);
  res.render('index', { title: 'Usernames in DB', usernames });
};

const renderUsernameForm = (req, res) => {
  res.render('usernameForm', { title: 'username form' });
};

const saveUsernameFormInput = async (req, res) => {
  const username = req.body.username;
  await db.insertUsername(username);
  res.render('confirmAddedUsername', { title: 'Success', username });
};

export {
  logAvailableUsernames,
  renderUsernameForm,
  saveUsernameFormInput
};
