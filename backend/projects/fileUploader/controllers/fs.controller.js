import * as insertQuery from '../models/insert.query.js';
import * as readQuery from '../models/read.query.js';
import multer from 'multer';
import { readFolderIdByNameOwnerId } from '../models/read.query.js';

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

const renderCreateFolder = [
  isUserAuthenticated,
  async (req, res) => {
    const folders = await readQuery.readFoldersByOwnerId(req.user.id);
    res.render('create-folder', { title: 'Create Folder', folders });
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

const handleCreateFolder = [
  isUserAuthenticated,
  // TODO: Input validation for folder name to not be 'root'
  async (req, res, next) => {
    const { name, parentId } = req.body;
    const ownerId = req.user.id;
    // Path is a string joined from separate parentId recursively towards root, separated by '/'
    // We know the parentId of each folder, from that folder's id we may find additional parents
    // until we reach a folder named root (not identifiable by id)
    const parentPath = await readQuery.createPathFromParentId(parentId);
    try {
      // await insertQuery.insertFolderByNameOwneridParentidPath(
      //   name,
      //   req.user.id,
      //   parentId,
      //   path
      // );
      // TODO: Figure out how to combine parentPath with the id of a folder
      res.redirect('/fs');
    } catch (error) {
      next(error);
    }
  }
];

const renderFs = [
  isUserAuthenticated,
  (req, res) => {
    // A render folder needs to know which folder is being called.
    const dir = req.params.dir;
    // The wildcard path segment will return a list
    // TODO: Find a way to list out the files with their paths
    res.render('fs', { title: 'File System' });
  }
];

export {
  renderFileUpload,
  handleFileUpload,
  renderFs,
  renderCreateFolder,
  handleCreateFolder
};
