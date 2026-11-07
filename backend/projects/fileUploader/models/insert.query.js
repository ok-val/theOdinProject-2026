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

// TODO: point Client to the correct Model
const insertFile = async (file) => {
  await prisma.user.create({
    data: {
      file
    }
  });
};

export { insertUserByAllFields };
