import { getAllUsernames } from './queries.js';

async function printAllUsernames() {
  const rows = await getAllUsernames();
  console.log(rows);
}

printAllUsernames();
