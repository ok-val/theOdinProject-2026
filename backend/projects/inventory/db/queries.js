import pool from './pool.js';

const findAllRecords = async () => {
  const { rows } = await pool.query('SELECT * FROM record;');
  return rows;
};

const queryRecord = async (q) => {
  const qPattern = `%${q}%`;
  const { rows } = await pool.query(
    'SELECT * FROM record WHERE LOWER(name) LIKE $1',
    [qPattern]
  );
  return rows;
};
export { findAllRecords, queryRecord };
