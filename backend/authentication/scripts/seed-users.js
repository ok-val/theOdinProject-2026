import pg from 'pg';

const { Client } = pg;

const seedUsers = `
CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMRARY KEY GENERATED ALWAYS AS IDENTITY,
	

`;
