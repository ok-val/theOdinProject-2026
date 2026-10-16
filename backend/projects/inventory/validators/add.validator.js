import { body, query, validationResult } from 'express-validator';
import { queryDataByRecordArtistInstrument } from '../db/queries.js';

const isLength1to255Msg = 'must be between 1 and 255 characters';
const isSpacePresent = 'No spaces are allows in ';
const isYear1to9999Msg =
  'Year must be between 1 and 9999. We only do AD records';
const isNotEmptyMsg = 'must not be empty';
// aRecord,
// aYear,
// aArtist,
// aInstrument,
// aLeader

const sanitizeAddInput = [
  body('aRecord')
    .trim()
    .notEmpty()
    .withMessage(`Record name ${isNotEmptyMsg}`)
    .isLength({ min: 1, max: 255 })
    .withMessage(`Record name ${isLength1to255Msg}`),

  body('aYear')
    .trim()
    .notEmpty()
    .withMessage(`Year ${isNotEmptyMsg}`)
    .isInt({ min: 1, max: 9999 })
    .withMessage(isYear1to9999Msg)
    .custom((value) => !/\s/.test(value))
    .withMessage(`${isSpacePresent} year.`),

  body('aArtist')
    .notEmpty()
    .withMessage(`Artist name ${isNotEmptyMsg}`),

  body('aInstrument')
    .notEmpty()
    .withMessage(`Instrument ${isNotEmptyMsg}`)
];

const checkExistingData = async (req, res, next) => {
  const { aRecord, aArtist, aInstrument } = req.body;
  const existingData = await queryDataByRecordArtistInstrument(
    aRecord,
    aArtist,
    aInstrument
  );
  if (existingData.length) {
    const errors = [
      {
        msg: `${aRecord} by ${aArtist} on ${aInstrument} already exists`,
        location: 'db'
      }
    ];
    return res.status(409).render('add', { errors: errors });
  }
  next();
};

const validateAddInput = [
  checkExistingData,
  sanitizeAddInput,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors.array());
      return res.status(422).render('add', { errors: errors.array() });
    }
    next();
  }
];

export default validateAddInput;
