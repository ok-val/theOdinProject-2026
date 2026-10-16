import * as db from '../db/queries.js';

// TODO: add sanitzation and validation
const getEdit = (req, res) => {
  const currentData = req.query;
  // console.log(currentData);
  res.render('edit', { currentData });
};

const postEdit = async (req, res) => {
  const {
    record: cRecord,
    year: cYear,
    artist: cArtist,
    instrument: cInstrument,
    leader: cLeader
  } = req.query;
  // console.log(req.body);
  const { eRecord, eArtist, eYear, eInstrument, eLeader } = req.body;
  await db.updateDataByAllFields(
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
  );
  // TODO: render edit confirmation page
  res.send('post data');
};

export { getEdit, postEdit };
