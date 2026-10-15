import * as db from '../db/queries.js';

const getIndex = async (req, res) => {
  const qRecord = req.query.qRecord;
  const qArtist = req.query.qArtist;
  const qYear = req.query.qYear;
  const qInstrument = req.query.qInstrument;

  let qRes;
  qRes = await db.queryRecordByAll(
    qRecord,
    qArtist,
    qYear,
    qInstrument
  );
  console.log(qRes);
  res.render('index', { qRes });
};

export { getIndex };
