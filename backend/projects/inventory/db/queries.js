import pool from './pool.js';

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

const createRecordByAllFields = async (
  aRecord,
  aYear,
  aArtist,
  aInstrument,
  aLeader
) => {
  const aRecordCapitalized = aRecord
    .trim()
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  const aArtistCapitalized = aArtist
    .trim()
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  const aInstrumentLowered = aInstrument.trim().toLowerCase();

  await pool.query(
    /** Suggested by Claude:
     * Instead of doing consecutive pool.query() calls, I could use
     * WITH to create a new table while INSERTing and RETURNING the
     * newly created id from the creation.
     *
     * For a refresher on INSERT ... SELECT.. vs INSERT .. VALUE, see
     * [[C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/databases/sql/query-methods/INSERT-SELECT-vs-INSERT-VALUE.md]]
     *
     * For refresher on ON CONFLICT, see
     * C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/databases/sql/query-methods/INSERT-handle-conflict.md
     */

    `
    WITH new_record AS (
      INSERT INTO record (name, year) VALUES ($1, $2)
      ON CONFLICT (name) DO NOTHING RETURNING id
    ), new_artist AS (
      INSERT INTO artist (name) VALUES ($3)
      ON CONFLICT (name) DO NOTHING RETURNING id 
    )
    INSERT INTO contribution (record_id, artist_id, instrument, leader)
    SELECT new_record.id, new_artist.id, $4, $5
    FROM new_record, new_artist;
  `,
    [
      aRecordCapitalized,
      aYear,
      aArtistCapitalized,
      aInstrumentLowered,
      aLeader
    ]
  );
};

const queryDataByRecordArtistInstrument = async (
  qRecord,
  qArtist,
  qInstrument
) => {
  const { rows } = await pool.query(
    `
    SELECT r.name AS record_name, a.name AS artist_name, c.instrument FROM contribution AS c
    JOIN record AS r ON r.id = c.record_id
    JOIN artist AS a ON a.id = c.artist_id
    WHERE r.name = $1
      AND a.name = $2
      AND c.instrument = $3
    `,
    [qRecord, qArtist, qInstrument]
  );
  return rows;
};

export {
  queryRecordByAll,
  updateDataByAllFields,
  createRecordByAllFields,
  queryDataByRecordArtistInstrument
};
