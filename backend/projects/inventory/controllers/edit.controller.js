import * as db from '../db/queries.js';
import validateEditInput from '../validators/edit.validator.js';

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

  const currentData = await db.queryDataByRecordArtistInstrument(
    eRecord.length ? eRecord : cRecord,
    eArtist.length ? eArtist : cArtist,
    eInstrument.length ? eInstrument : cInstrument
  );

  res.render('edit', {
    editSuccess: true,
    currentData: currentData[0]
  });
};

const postValidatedEdit = [validateEditInput, postEdit];

export { getEdit, postValidatedEdit };
