import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((req, res) => {
  const files = {
    home: 'C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/backend/nodejs/dummy-files/home.html',
    about:
      'C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/backend/nodejs/dummy-files/about.html',
    default_404:
      'C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/backend/nodejs/dummy-files/404.html'
  };

  let source = null;

  switch (req.url) {
    case '/':
      source = files.home;
      res.statusCode = 200;
      break;
    case '/home':
      source = files.home;
      res.statusCode = 200;
      break;
    case '/about':
      source = files.about;
      res.statusCode = 200;
      break;
    // redirecting
    case '/about-foo':
      // set statusCode to notify browser of permanent redirect
      res.statusCode = 301;
      //
      res.setHeader('Location', '/about');
      res.end();
    default:
      source = files.default_404;
      res.statusCode = 400;
      break;
  }

  res.setHeader('Content-Type', 'text/html');

  fs.readFile(source, (err, data) => {
    if (err) {
      console.error(err);
      res.end(data);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening');
});
