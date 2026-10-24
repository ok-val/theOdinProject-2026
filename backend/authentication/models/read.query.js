import pool from './pool.js';

const readUserByUsername = async (username) => {
  const { rows } = await pool.query(
    `
	SELECT * FROM users WHERE username = $1;
	`,
    [username]
  );
  return rows;
};

const readUserById = async (id) => {
  const { rows } = await pool.query(
    `
	SELECT * FROM users WHERE id = $1
	`,
    [id]
  );
  return rows;
};

export { readUserByUsername, readUserById };
