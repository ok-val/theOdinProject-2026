import * as insertQuery from '../models/insert.query.js';

// folderRouter.get('/', folderController.renderUserFolders);
// folderRouter.post('/', folderController.handleFolderCreate);

const renderUserFolders = (req, res) => {
  res.render('folders', { title: 'Folders' });
};

const handleFolderCreate = async (req, res, next) => {
  try {
    // TODO: Create a post form for this
    const name = '';
    const ownerId = '';
    const parentId = '';
    await insertQuery.insertFolderByNameOwneridParentid(
      name,
      ownerId,
      parentId
    );
  } catch (error) {
    next(error);
  }
};
