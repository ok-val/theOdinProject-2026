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

const readFoldersByOwnerId = async (ownerId) => {
  const folders = await prisma.folder.findMany({
    where: {
      ownerId
    }
  });
  // all users should have at least one root folder
  return folders;
};

const createPathFromParentId = async (parentId) => {
  // 1. Read the parent folder name and id
  // 2. If the parent name != 'root', read the parent folder name and id again
  const segments = [];
  const recurseIdTowardsRoot = async (id) => {
    const folder = await prisma.folder.findUnique({
      where: {
        id
      }
    });
    if (!folder) throw new Error(`Folder ${id} not found`);
    // The user can also name a child folder 'root', which we can allow
    // using the parentId === null instead
    // if (folder.parentId === null) {
    //   return segments.unshift(folder.id);
    // }
    // segments.unshift(folder.id);
    // await recurseIdTowardsRoot(folder.parentId);
    //
    // Additionally I could also flip the base and recursive case like this
    segments.unshift(folder.id);
    if (folder.parentId !== null) {
      await recurseIdTowardsRoot(folder.parentId);
    }
    // For future consideration, an alternative is using a while loop with side effects
  };
  await recurseIdTowardsRoot(parentId);
  return segments.join('/');
};

export {
  readUserByUsername,
  readUserById,
  readFoldersByOwnerId,
  createPathFromParentId
};
