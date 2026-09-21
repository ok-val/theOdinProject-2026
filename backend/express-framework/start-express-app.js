import express from 'express';

// as we may compare from '../nodejs/client-and-server/server-routing.js'
// this version of the file is much cleaner and easier to maintain,
// abstracting the brittle pieces of the core structure (e.g., swtich-
// case statements)

const app = express();

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// routing

app.get('/', (req, res) => {
  // httpObject.send() auto detect content type and status code
  // res.send('Hello World');
  res.sendFile('./dummy-files/home.html', {
    root: import.meta.dirname
  });
});

app.get('/about', (req, res) => {
  // res.send('<h1>About page</h1>');
  res.sendFile('./dummy-files/about.html', {
    root: import.meta.dirname
  });
});

// redirecting

app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// default page: Use only fires if, at runtime, a req is not yet
// queued to the stack.
app.use((req, res) => {
  res.status(404).sendFile('./dummy-files/404.html', {
    root: import.meta.dirname
  });
});
