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

const insertFileByAllFields = async (name, path, size, ownerId) => {
  await prisma.file.create({
    data: {
      name,
      path,
      size,
      ownerId
    }
  });
};

export { insertUserByAllFields, insertFileByAllFields };
