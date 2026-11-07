import * as insertQuery from '../models/insert.query.js';

const renderFileUpload = (req, res) => {
  res.render('file-upload', { title: 'File Upload' });
};

const handleFileUpload = async (req, res, next) => {
  const { file } = req.body;
  try {
    await insertQuery.insertFile(file);
    res.redirect('/');
  } catch (error) {
    return next(error);
  }
};

export { renderFileUpload, handleFileUpload };
