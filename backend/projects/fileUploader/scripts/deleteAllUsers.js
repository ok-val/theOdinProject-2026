#!/usr/bin/env node

import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({ adapter });

async function deleteAllUsers() {
  await prisma.user.deleteMany({});
}

try {
  await deleteAllUsers();
  console.log('Delete complete');
} catch (error) {
  console.error(error);
} finally {
  await prisma.$disconnect();
}
