import * as db from '../db/queries.js';

// TODO: add sanitzation and validation
const getAdd = (req, res) => {
  res.render('add');
};

const postAdd = async (req, res) => {
  const { aRecord, aYear, aArtist, aInstrument, aLeader } = req.body;
  await db.createRecordByAllFields(
    aRecord,
    aYear,
    aArtist,
    aInstrument,
    aLeader
  );
  // TODO: render add confirmation page
  res.send('');
};

export { getAdd, postAdd };
