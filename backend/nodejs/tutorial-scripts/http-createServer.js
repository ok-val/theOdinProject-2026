import http from 'node:http';

// Create a local server on the current computer, acting as a Web server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running on port 3000');
});
