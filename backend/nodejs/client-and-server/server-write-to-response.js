import http from 'node:http';

const returnfile =
  'C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/backend/nodejs/dummy-files/server-write-test.html';

const server = http.createServer((request, response) => {
  console.log(`Response received`);

  response.setHeader('Content-Type', 'text/html');
  fs.readFile(returnfile, (err, data) => {
    if (err) {
      console.error(err);
      response.end();
    }
    response.write(data);
    response.end();
  });
});

server.listen(3000, 'localhost', () => {});
