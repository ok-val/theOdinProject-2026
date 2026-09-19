import fs from 'node:fs';

const content = 'My first content written into a file using node:fs. ';

const contentPrepend =
  'This content was appended to the beginning using the w+ flag.';

fs.writeFile('../dummy-files/write-test.txt', content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File written successfully!');
  }
});

fs.appendFile(
  '../dummy-files/write-test.txt',
  contentPrepend,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File written successfully!');
    }
  }
);
