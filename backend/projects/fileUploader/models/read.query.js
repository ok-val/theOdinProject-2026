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

export { readUserByUsername, readUserById, readFolderIdByNameOwnerId };
