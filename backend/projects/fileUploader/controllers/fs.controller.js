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
    // TODO: File upload view should provide a list of folder as location
    res.render('file-upload', { title: 'File Upload' });
  }
];

const handleFileUpload = [
  isUserAuthenticated,
  upload.single('file'),
  async (req, res, next) => {
    // multer parses info about the file in req.file
    const { originalname: name, path, size } = req.file;
    const ownerId = req.user.id;
    // TODO: Figure out a way to get into a folder
    // try {
    //   await insertQuery.insertFileByNamePathSizeOwneridFolderid(
    //     name,
    //     path,
    //     size,
    //     ownerId,
    //     folderId
    //   );
    //   res.redirect('/');
    // } catch (error) {
    //   return next(error);
    // }
  }
];

const renderFs = [
  isUserAuthenticated,
  (req, res) => {
    // A render folder needs to know which folder is being called.
    const dir = req.params.dir;
    // The wildcard path segment will return a list
    // TODO: Create form for inserting folders
    res.render('fs', { title: 'File System' });
  }
];

export { renderFileUpload, handleFileUpload, renderFs };
