import express from 'express';
import base_router from './routes/base.routes.js';
import users_router from './routes/users.routes.js';

const app = express();
const local_endpoint = 3000;

app.set('view engine', 'ejs');
app.set('views', './projects/infoSite/views');
// console.log(app.set());

app.listen(local_endpoint, () => {
  console.log('Listening on port 3000');
});

// app.use(base_router);

// app.use('/user{s}', users_router);

// app
//   .route('/book')
//   .get((req, res) => {
//     res.send('Get a random book');
//   })
//   .post((req, res) => {
//     res.send('Add a book');
//   })
//   .put((req, res) => {
//     res.send('Update the book');
//   });

// ERR_HTTP_HEADERS_SENT
// app.use((req, res, next) => {
//   res.send('hi');
//   next();
// });

// app.use((req, res) => {
//   // This will throw the ERR_HTTP_HEADERS_SENT
//   res.send('2');
// });

app.get('/{*splat}', (req, res) => {
  res.status(404).render('404');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('500 Error');
});
