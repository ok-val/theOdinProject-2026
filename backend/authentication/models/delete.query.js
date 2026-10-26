import pool from './pool.js';

// need to add messages.id
const deleteMessageById = async (messageId) => {
  const messageIdInt = Number(messageId);
  await pool.query(
    // TypeError bug: messageId passed in here was a string
    `
	DELETE FROM messages
	WHERE messages.id = $1
	;`,
    [messageIdInt]
  );
  return;
};

export { deleteMessageById };
