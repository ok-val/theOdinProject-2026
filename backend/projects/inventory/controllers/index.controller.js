import * as db from '../db/queries.js';

const getIndex = async (req, res) => {
  const q = req.query.q;
  const qType = req.query.qType;
  let qRes;
  if (!q.length) {
    switch (qType) {
      case 'byName':
        qRes = await db.findAllRecords();
        break;
      case 'byArtist':
        qRes = await db.findAllArtists();
        break;
    }
  } else {
    qRes = await db.queryRecord(q);
  }
  // console.log(qRes);
  res.render('index', { qRes, qType });
};

export { getIndex };
