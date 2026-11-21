#!/usr/bin/env node

import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({ adapter });

async function updateDefaultPathToRootFolders() {
  await prisma.folder.updateMany({
    where: { parentId: null },
    data: { path: 'root' }
  });
}

try {
  await updateDefaultPathToRootFolders();
  console.log('Update complete');
} catch (error) {
  console.error(error);
} finally {
  await prisma.$disconnect();
}
