import pg from 'pg';

const { Client } = pg;
const seedUsersTable = `
CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	username VARCHAR ( 255 ) NOT NULL UNIQUE,
	firstname VARCHAR ( 255 ) NOT NULL,
	lastname VARCHAR ( 255 ) NOT NULL,
	password VARCHAR ( 255 ) NOT NULL
);
`;

const seedMessagesTable = `
CREATE TABLE IF NOT EXISTS messages (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	title VARCHAR ( 255 ),
	message VARCHAR ( 255 )
);
`;

async function main() {
  console.log('Seeding...');
  const client = new Client({
    connectionString: process.argv[2]
  });
  try {
    await client.connect();
    await client.query(seedUsersTable);
    await client.query(seedMessagesTable);
    await client.end();
    console.log('Seeding finished.');
  } catch (error) {
    console.error(error);
  }
}

main();
