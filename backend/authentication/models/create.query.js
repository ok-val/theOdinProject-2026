import pool from './pool.js';

const createUser = async (username, firstname, lastname, password) => {
  await pool.query(
    `
  INSERT INTO users (username, firstname, lastname, password)
  VALUES ($1, $2, $3, $4);
  `,
    [username, firstname, lastname, password]
  );
  return;
};

const createMessage = async (user_id, message) => {
  await pool.query(
    `
  INSERT INTO messages (user_id, message)
  VALUES ($1, $2);
  `,
    [user_id, message]
  );
  return;
};

export { createUser, createMessage };
