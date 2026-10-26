import * as insertQuery from '../models/insert.query.js';
import * as readQuery from '../models/read.query.js';
import * as deleteQuery from '../models/delete.query.js';

const renderViewMessages = async (req, res) => {
  let rows;
  if (req.isAuthenticated()) {
    rows = await readQuery.readMessages();
    res.render('view-messages', {
      title: 'All messages',
      messages: rows
    });
  } else {
    rows = await readQuery.readMessagesAtIdTitleMessage();
    res.render('view-messages', {
      title: 'All messages',
      messages: rows
    });
  }
};

const renderCreateMessage = (req, res) => {
  res.render('create-message', { title: 'Create message' });
};

const handleMessagePost = async (req, res, next) => {
  const { title, message } = req.body;
  const userId = req.user.id;
  if (req.isUnauthenticated()) {
    return res.send('You are unauthorized to create messages');
  }
  try {
    await insertQuery.insertMessageByAllFields(userId, title, message);
    res.send('Your message is posted :)');
  } catch (error) {
    return next(error);
  }
};

const handleMessageDelete = async (req, res, next) => {
  const messageId = req.params.id;
  try {
    await deleteQuery.deleteMessageById(messageId);
    res.json({ redirect: '/message/view' });
  } catch (error) {
    console.error(error);
    next(error);
    // res.status(422).json({ redirect: 'server failed to delete' });
  }
};

export {
  renderViewMessages,
  renderCreateMessage,
  handleMessagePost,
  handleMessageDelete
};
