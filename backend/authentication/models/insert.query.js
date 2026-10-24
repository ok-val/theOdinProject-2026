import pool from '../models/pool.js';

const insertUserByAllFields = async (
  username,
  firstName,
  lastName,
  saltHashedPasswd
) => {
  await pool.query(
    `
	INSERT INTO users (username, firstname, lastname, password)
	VALUES ($1, $2, $3, $4);
	`,
    [username, firstName, lastName, saltHashedPasswd]
  );
  return;
};

export { insertUserByAllFields };
