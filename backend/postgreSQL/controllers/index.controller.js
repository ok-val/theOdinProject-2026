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

const searchUsernames = async (req, res, next) => {
  const q = req.query.search;
  if (!q) {
    return next('route');
  }
  // console.log(`Client searches for ${q}. Searching...`);
  const { rows } = await db.findUsername(q);
  // console.log(rows.length ? rows : undefined);
  const resultData = rows.length ? rows : null;
  res.render('searchRes', { title: 'Search Results', resultData, q });
};

const deleteAllUsers = async (req, res) => {
  await db.deleteAllUsernames();
  res.redirect('/');
};

export {
  logAvailableUsernames,
  renderUsernameForm,
  saveUsernameFormInput,
  searchUsernames,
  deleteAllUsers
};
