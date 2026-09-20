import fs from 'node:fs';

if (!fs.existsSync('./testdir')) {
  fs.mkdir('./testdir', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('folder created!');
  });
} else {
  fs.rmdir('./testdir', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('folder deleted!');
  });
}

if (!fs.existsSync('./testfile.js')) {
  fs.writeFile('./testfile.js', '', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('file created!');
  });
} else {
  fs.unlink('./testfile.js', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('file deleted!');
  });
}
