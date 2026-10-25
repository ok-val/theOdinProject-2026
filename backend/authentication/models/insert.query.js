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

const insertMessageByAllFields = async (userId, title, message) => {
  await pool.query(
    `
	INSERT INTO messages (user_id, title, message)
	VALUES ($1, $2, $3);
	`,
    [userId, title, message]
  );
  return;
};

export { insertUserByAllFields, insertMessageByAllFields };
