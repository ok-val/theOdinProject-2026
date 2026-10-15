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

const queryRecordByAll = async (
  qRecord,
  qArtist,
  qYear,
  qInstrument
) => {
  const qRecordPattern = `%${qRecord.toLowerCase()}%`;
  const qArtistPattern = `%${qArtist.toLowerCase()}%`;
  const qYearPattern = `%${qYear.toLowerCase()}%`;
  const qInstrumentPattern = `%${qInstrument.toLowerCase()}%`;

  const { rows } = await pool.query(
    `
    SELECT r.name AS record, r.year, a.name AS artist, c.instrument
      FROM contribution AS c
      LEFT OUTER JOIN record AS r
      ON c.record_id = r.id
      JOIN artist AS a
      ON c.artist_id = a.id
      WHERE LOWER(r.name) LIKE $1
        AND CAST(r.year AS VARCHAR(20)) LIKE $2
        AND LOWER(a.name) LIKE $3
        AND LOWER(c.instrument) LIKE $4;
    `,
    [qRecordPattern, qYearPattern, qArtistPattern, qInstrumentPattern]
  );

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

export {
  findAllRecords,
  queryRecord,
  queryYear,
  findAllArtists,
  queryRecordByAll
};
