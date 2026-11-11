import * as insertQuery from '../models/insert.query.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads' });

const isUserAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
};

const renderFileUpload = [
  isUserAuthenticated,
  (req, res) => {
    res.render('file-upload', { title: 'File Upload' });
  }
];

const handleFileUpload = [
  upload.single('file'),
  async (req, res, next) => {
    const { originalname: name, path, size } = req.file;
    const ownerId = req.user.id;
    // try {
    //   await insertQuery.insertFile(name, path, size, ownerId);
    //   res.redirect('/');
    // } catch (error) {
    //   return next(error);
    // }
  }
];

export { renderFileUpload, handleFileUpload };
