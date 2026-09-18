# Create a HTTP Server with Node

> `http.createServer()` is the NodeJS's built-in `http` method for
> constructing an HTTP server instance capable of receiving requests and
> serving responses.

Core mechanics:

- Param: `requestListener` is an optional callback that attaches a
  listener to the server's `request` event. Every incoming HTTP request
  triggers this callback.

- Two callback parameters: `req` and `res` that can be passed into said
  callback, in which:
  - `req` (`http.IncomingMessage` object): A readable _stream_
    representing the incoming request data, containing metadata as
    props: `req.url`, `req.method`, `req.headers`, `req.body`.
  - `res` (`http.ServerResponse` object): A writable _stream_ used to
    send HTTP response status code, headers, and body (payload) back to
    the client.
  - These objects contain handlers that can execute for every request
    recieved.

```js
import http from 'node:http';

// Create a local server on the current computer, acting as a Web server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
