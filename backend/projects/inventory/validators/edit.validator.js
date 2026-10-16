import { body, validationResult } from 'express-validator';
import { queryDataByRecordArtistInstrument } from '../db/queries.js';

const isLength1to255Msg = 'must be between 1 and 255 characters';
const isSpacePresent = 'No spaces are allows in ';
const isYear1to9999Msg =
  'Year must be between 1 and 9999. We only do AD records';

const sanitizeEditInput = [
  body('eRecord')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage(`Record name ${isLength1to255Msg}`),

  body('eYear')
    .optional({ values: 'falsy' })
    .trim()
    .isInt({ min: 1, max: 9999 })
    .withMessage(isYear1to9999Msg)
    .custom((value) => !/\s/.test(value))
    .withMessage(`${isSpacePresent} year.`),

  body('eArtist').optional({ values: 'falsy' }).trim(),

  body('eInstrument').optional({ values: 'falsy' }).trim()
];

const validateEditInput = [
  sanitizeEditInput,
  async (req, res, next) => {
    const errors = validationResult(req);
    const currentData = await queryDataByRecordArtistInstrument(
      req.query.record,
      req.query.artist,
      req.query.instrument
    );

    if (!errors.isEmpty()) {
      console.error(errors.array());
      return res.status(422).render('edit', {
        errors: errors.array(),
        currentData: currentData[0]
      });
    }
    next();
  }
];

export default validateEditInput;
