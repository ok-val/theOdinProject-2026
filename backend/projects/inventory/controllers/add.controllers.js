import * as db from '../db/queries.js';
import validateAddInput from '../validators/add.validator.js';

// TODO: add sanitzation and validation
const getAdd = (req, res) => {
  res.render('add', { errors: null });
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
  res.redirect('/');
};
const postValidatedAdd = [validateAddInput, postAdd];

export { getAdd, postValidatedAdd };
