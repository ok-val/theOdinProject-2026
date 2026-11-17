import prisma from '../lib/prisma.js';

const readUserByUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: { username: username }
  });
  return user;
};

const readUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: id }
  });
  return user;
};

const readFolderIdByNameOwnerId = async (name, ownerId) => {
  const folder = await prisma.folder.findFirst({
    where: {
      id,
      name,
      ownerId,
      parentId
    }
  });
  return folder?.id ?? null;
};

const readFoldersByOwnerId = async (ownerId) => {
  const folders = await prisma.folder.findMany({
    where: {
      ownerId
    }
  });
  // all users should have at least one root folder
  return folders;
};

export {
  readUserByUsername,
  readUserById,
  readFolderIdByNameOwnerId,
  readFoldersByOwnerId
};
