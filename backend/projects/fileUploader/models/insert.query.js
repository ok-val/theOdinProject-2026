import prisma from '../lib/prisma.js';

const insertUserByAllFields = async (
  username,
  firstName,
  lastName,
  password
) => {
  await prisma.user.create({
    data: {
      username,
      firstName,
      lastName,
      password
    }
  });
};

const insertFileByNamePathSizeOwneridFolderid = async (
  name,
  path,
  size,
  ownerId
) => {
  await prisma.file.create({
    data: {
      name,
      path,
      size,
      ownerId,
      folderId
    }
  });
};

const insertFolderByNameOwneridParentid = async (
  name,
  ownerId,
  parentId
) => {
  await prisma.folder.create({
    data: {
      name,
      ownerId,
      parentId
    }
  });
};

export {
  insertFileByNamePathSizeOwneridFolderid,
  insertUserByAllFields,
  insertFolderByNameOwneridParentid
};
