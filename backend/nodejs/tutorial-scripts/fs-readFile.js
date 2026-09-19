import fs from 'node:fs';

fs.readFile('../dummy-files/read-test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
