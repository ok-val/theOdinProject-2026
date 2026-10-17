import * as db from '../db/queries.js';

const deleteData = async (req, res) => {
  try {
    await db.deleteDataByAll(req.query);
    res.json({ redirect: '/' });
  } catch (error) {
    console.error(error);
    res.status(422).json({ redirect: '/' });
  }
};

export { deleteData };
