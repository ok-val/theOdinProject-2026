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

export { readUserByUsername, readUserById };
