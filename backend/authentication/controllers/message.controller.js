const renderViewMessages = (req, res) => {
  res.render('view-messages', { title: 'All messages' });
};

export { renderViewMessages };
