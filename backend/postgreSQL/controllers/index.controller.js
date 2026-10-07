const logAvailableUsernames = (req, res) => {
  console.log('usernames will be logged here - wip');
  res.send('logAvailableUsernames');
};

const renderUsernameForm = (req, res) => {
  res.render('usernameForm', { title: 'username form' });
};

const saveUsernameFormInput = (req, res) => {
  console.log(`username to be saved: ${req.body.username}`);
  res.send('saveUsernameFormInput');
};

export {
  logAvailableUsernames,
  renderUsernameForm,
  saveUsernameFormInput
};
