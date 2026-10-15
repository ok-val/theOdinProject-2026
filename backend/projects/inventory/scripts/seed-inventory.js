#!/usr/bin/env node

import pg from 'pg';

const { Client } = pg;

const seedInvetory = `
CREATE TABLE IF NOT EXISTS record (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL UNIQUE,
  year INTEGER
);

CREATE TABLE IF NOT EXISTS artist (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS contribution (
  record_id INTEGER NOT NULL REFERENCES record(id) ON DELETE CASCADE,
  artist_id INTEGER NOT NULL REFERENCES artist(id) ON DELETE CASCADE,
  instrument VARCHAR(255),
  leader BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (record_id, artist_id, instrument)
);

INSERT INTO record (name, year) VALUES
  ('Poinciana', 1951),
  ('Nights of Ballads & Blues', 1963),
  ('Kind of Blue', 1959);

INSERT INTO artist (name) VALUES
  ('Ahmad Jamal'),     -- 1
  ('McCoy Tyner'),     -- 2
  ('Miles Davis'),     -- 3
  ('John Coltrane'),   -- 4
  ('Bill Evans'),      -- 5
  ('Paul Chambers'),   -- 6
  ('Ray Crawford'),    -- 7
  ('Eddie Calhoun'),   -- 8
  ('Steve Davis'),     -- 9
  ('Lex Humphries'),   -- 10
  ('Jimmy Cobb');      -- 11

INSERT INTO contribution (record_id, artist_id, instrument, leader) VALUES
  -- Poinciana
  (1, 1, 'piano', true),
  (1, 7, 'guitar', false),
  (1, 8, 'bass', false),
  -- Nights of Ballads & Blues
  (2, 2, 'piano', true),
  (2, 9, 'bass', false),
  (2, 10, 'drums', false),
  -- Kind of Blue
  (3, 3, 'trumpet', true),
  (3, 4, 'tenor saxophone', false),
  (3, 5, 'piano', false),
  (3, 6, 'bass', false),
  (3, 11, 'drums', false);
`;

async function main() {
  console.log('Seeding..');
  const client = new Client({
    connectionString: process.argv[2]
  });
  try {
    await client.connect();
    await client.query(seedInvetory);
    await client.end();
    console.log('Seeding finished');
  } catch (error) {
    console.error(error);
  }
}

main();
