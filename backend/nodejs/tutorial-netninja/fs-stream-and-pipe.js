import { error } from 'node:console';
import fs from 'node:fs';

const isCopying = true;

const files = {
  origin:
    'C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/backend/nodejs/tutorial-netninja/stream-test.txt',
  destination:
    'C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/backend/nodejs/tutorial-netninja/stream-test-copy.txt'
};

const readStream = fs.createReadStream(files.origin, {
  encoding: 'utf-8'
});

const writeStream = fs.createWriteStream(files.destination);

if (fs.existsSync(files.destination)) {
  fs.writeFile(files.destination, '', (err) => {
    err && console.error(err);
  });
}

readStream.on('data', (chunk) => {
  console.log('---NEW CHUNK---');
  console.log(chunk);
  // console.log(chunk.toString());
  // A chunk will be separated at a certain threshold

  if (isCopying) {
    writeStream.write('\n---NEW CHUNK---\n');
    writeStream.write(chunk);
  }
});
