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

export { insertUserByAllFields };
