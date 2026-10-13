import * as db from '../db/queries.js';

const getIndex = async (req, res) => {
  const q = req.query.q;
  let qRes;
  if (!q.length) {
    qRes = await db.findAllRecords();
  } else {
    console.log('q is populated: query specific results');
    qRes = await db.queryRecord(q);
  }
  console.log(qRes);
  res.render('index', { qRes });
};

export { getIndex };
