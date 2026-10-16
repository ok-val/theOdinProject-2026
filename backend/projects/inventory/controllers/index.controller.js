import * as db from '../db/queries.js';

// TODO: add sanitzation and validation
const getIndex = async (req, res) => {
  const { qRecord, qArtist, qYear, qInstrument, tLeader } = req.query;

  let qRes;
  qRes = await db.queryRecordByAll(
    qRecord,
    qArtist,
    qYear,
    qInstrument,
    tLeader
  );

  res.render('index', { qRes });
};

export { getIndex };
