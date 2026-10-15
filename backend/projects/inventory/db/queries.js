import pool from './pool.js';

// const findAllRecords = async () => {
//   const { rows } = await pool.query('SELECT * FROM record;');
//   return rows;
// };

// const findAllArtists = async (q) => {
//   const qPattern = `%${q}%`;
//   const { rows } = await pool.query('SELECT * FROM artist;');
//   return rows;
// };

const queryRecordByAll = async (
  qRecord,
  qArtist,
  qYear,
  qInstrument,
  tLeader
) => {
  const qRecordPattern = `%${qRecord?.toLowerCase()}%`;
  const qArtistPattern = `%${qArtist?.toLowerCase()}%`;
  const qYearPattern = `%${qYear?.toLowerCase()}%`;
  const qInstrumentPattern = `%${qInstrument?.toLowerCase()}%`;

  // const tLeaderPattern = tLeader.length ? tLeader : '(true, false)';
  const qLeaderQuery = !tLeader.length
    ? 'IN (true, false)'
    : `= CAST (${tLeader} AS BOOLEAN)`;

  const { rows } = await pool.query(
    `
    SELECT r.name AS record, r.year, a.name AS artist, c.instrument, c.leader
      FROM contribution AS c
      LEFT OUTER JOIN record AS r
      ON c.record_id = r.id
      JOIN artist AS a
      ON c.artist_id = a.id
      WHERE LOWER(r.name) LIKE $1
        AND CAST(r.year AS VARCHAR(20)) LIKE $2
        AND LOWER(a.name) LIKE $3
        AND LOWER(c.instrument) LIKE $4
        AND c.leader ${qLeaderQuery}
    `,
    [qRecordPattern, qYearPattern, qArtistPattern, qInstrumentPattern]
  );

  return rows;
};

const updateDataByAllFields = async (
  cRecord,
  cYear,
  cArtist,
  cInstrument,
  cLeader,
  eRecord,
  eYear,
  eArtist,
  eInstrument,
  eLeader
) => {
  // console.log(cRecord, cYear, cArtist, cInstrument, cLeader);
  // console.log(eRecord, eYear, eArtist, eInstrument, eLeader);

  if (eRecord.length) {
    await pool.query(
      `
      -- Need to ensure record.name is unique
      UPDATE record
        SET name = $1
        WHERE name = $2
          AND year = $3;
      `,
      [eRecord, cRecord, cYear]
    );
  }

  if (eYear.length) {
    await pool.query(
      `
      UPDATE record
        SET year = $1
        WHERE name = $2
          AND year = $3;
      `,
      [eYear, cRecord, cYear]
    );
  }

  if (eArtist.length) {
    await pool.query(
      `
      UPDATE artist
        SET name = $1
        WHERE name = $2;
      `,
      [eArtist, cArtist]
    );
  }

  if (eInstrument.length) {
    await pool.query(
      `
      UPDATE contribution AS c
        SET instrument = $1

        -- To update records using foreign values, use WHERE clause to link relations together 
        FROM record AS r, artist AS a
        WHERE c.record_id = r.id
          AND c.artist_id = a.id

          -- Conditions begin
          AND r.name = $2
          AND a.name = $3
          AND c.instrument = $4;
      `,
      [eInstrument, cRecord, cArtist, cInstrument]
    );
  }

  if (eLeader.length) {
    await pool.query(
      `
      UPDATE contribution AS c
        SET leader = CAST($1 AS BOOLEAN)

        -- To update records using foreign values, use WHERE clause to link relations together 
        FROM record AS r, artist AS a
        WHERE c.record_id = r.id
          AND c.artist_id = a.id

          -- Conditions begin
          AND r.name = $2
          AND a.name = $3
          AND c.instrument = $4;
      `,
      [eLeader, cRecord, cArtist, cInstrument]
    );
  }
};

// const queryRecord = async (q) => {
//   const qPattern = `%${q}%`;
//   const { rows } = await pool.query(
//     'SELECT * FROM record WHERE LOWER(name) LIKE $1',
//     [qPattern]
//   );
//   return rows;
// };

// const queryYear = async (q) => {
//   const qPattern = `%${q}%`;
//   const { rows } = await pool.query(
//     'SELECT * FROM record WHERE year = $1',
//     [qPattern]
//   );
//   return rows;
// };

// const queryInstrument = async (q) => {
//   const qPattern = `%${q}%`;
//   const { rows } = await pool.query(
//     'SELECT * FROM record WHERE LOWER(instrument) LIKE $1',
//     [qPattern]
//   );
//   return rows;
// };

export {
  // findAllRecords,
  // queryRecord,
  // queryYear,
  // findAllArtists,
  queryRecordByAll,
  updateDataByAllFields
};
