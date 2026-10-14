import pool from './pool.js';

const findAllRecords = async () => {
  const { rows } = await pool.query('SELECT * FROM record;');
  return rows;
};

const findAllArtists = async (q) => {
  const qPattern = `%${q}%`;
  const { rows } = await pool.query('SELECT * FROM artist;');
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

const queryYear = async (q) => {
  const qPattern = `%${q}%`;
  const { rows } = await pool.query(
    'SELECT * FROM record WHERE year = $1',
    [qPattern]
  );
  return rows;
};

const queryInstrument = async (q) => {
  const qPattern = `%${q}%`;
  const { rows } = await pool.query(
    'SELECT * FROM record WHERE LOWER(instrument) LIKE $1',
    [qPattern]
  );
  return rows;
};

export { findAllRecords, queryRecord, queryYear, findAllArtists };
