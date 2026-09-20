import http from 'node:http';

const server = http.createServer((request, response) => {
  console.log('Request received');
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);

  // if a response is not return, the requester will be hanging
  /**
   * These are the three steps to writing to a response:
   * 1. Set headers for the response indicating content types
   * 2. Write the response body
   * 3. End the response to send it back
   */

  // response.setHeader('Content-Type', 'text/plain');
  // response.write('written to response from Server');
  response.setHeader('Content-Type', 'text/html');
  response.write('<p>written HTML to response from Server</p>');
  response.end();
});

// This server needs to be activated to listen to request events
server.listen(
  // port number:
  3000,
  // host name:
  'localhost',
  () => {
    console.log('listening for request');
  }
);
