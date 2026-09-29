const renderUsersMain = (req, res) => {
  res.send('Main user page');
};

const renderUsersPageViaId = (req, res) => {
  const user_id = req.params.id;
  res.send(user_id);
};

export { renderUsersMain, renderUsersPageViaId };
