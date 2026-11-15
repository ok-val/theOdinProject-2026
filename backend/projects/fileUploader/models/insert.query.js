import prisma from '../lib/prisma.js';

const insertUserByAllFields = async (
  username,
  firstName,
  lastName,
  password
) => {
  const user = await prisma.user.create({
    data: {
      username,
      firstName,
      lastName,
      password
    }
  });
  return user;
};

const insertFileByNamePathSizeOwneridFolderid = async (
  name,
  path,
  size,
  ownerId,
  folderId
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

const insertFolderByNameOwneridParentidPath = async (
  name,
  ownerId,
  parentId,
  path
) => {
  await prisma.folder.create({
    data: {
      name,
      ownerId,
      parentId,
      path
    }
  });
};

export {
  insertFileByNamePathSizeOwneridFolderid,
  insertUserByAllFields,
  insertFolderByNameOwneridParentidPath
};
