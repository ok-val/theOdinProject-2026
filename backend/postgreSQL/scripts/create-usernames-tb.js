#!/usr/bin/env node

import pg from 'pg';

const { Client } = pg;

const createTableQuery = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES 
  ('Sauron'),
  ('Elrond'),
  ('Durin');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: `postgresql://${process.env['USERNAME']}:${process.env['DATABASE_PASSWORD']}@localhost:5432/odin_users`
  });
  await client.connect();
  await client.query(createTableQuery);
  await client.end();
  console.log('seeding finished');
}

main();
