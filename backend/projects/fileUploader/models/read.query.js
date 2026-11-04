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

const readMessages = async () => {
  const { rows } = await pool.query(
    `
	SELECT m.id, u.username, m.title, m.message FROM messages AS m
	INNER JOIN users AS u
	ON u.id = m.user_id;
	`
  );
  return rows;
};

const readMessagesAtIdTitleMessage = async () => {
  const { rows } = await pool.query(
    `
	SELECT id, title, message FROM messages;
	`
  );
  return rows;
};

export {
  readUserByUsername,
  readUserById,
  readMessagesAtIdTitleMessage,
  readMessages
};
