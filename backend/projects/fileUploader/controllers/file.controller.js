import * as insertQuery from '../models/insert.query.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads' });

const renderFileUpload = (req, res) => {
  res.render('file-upload', { title: 'File Upload' });
};

const handleFileUpload = [
  upload.single('file'),
  async (req, res, next) => {
    const { file } = req.file;

    //  req.file Object = {fieldname: 'file', originalname: 'textFile.txt', encoding: '7bit', mimetype: 'text/plain', path: 'uploads\\64683e2359391f1d4405440c26ec2a38', …}
    // destination string = 'uploads'
    // encoding string = '7bit'
    // fieldname string = 'file'
    // filename string = '64683e2359391f1d4405440c26ec2a38'
    // mimetype string = 'text/plain'
    // originalname string = 'textFile.txt'
    // path string = 'uploads\\64683e2359391f1d4405440c26ec2a38'
    // size number = 0

    // TODO: find out how to get these vars
    const { name, path, size } = req.body;
    const ownerId = req.user;
    // try {
    //   await insertQuery.insertFile(name, path, size, ownerId);
    //   res.redirect('/');
    // } catch (error) {
    //   return next(error);
    // }
  }
];

export { renderFileUpload, handleFileUpload };
