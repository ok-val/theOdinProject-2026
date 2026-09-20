# localhost

`localhost` is a URL component that functions as the hostname/domain
name in a URL that points to the invoker's own computer. Localhost
provides a number of ports that direct requests to the local server
listener.

```js
import http from 'node:http';

const server = http.createServer((req, res) => {
  // fires on request receipt
});

server.listen(3000, 'localhost', () => {});
```
