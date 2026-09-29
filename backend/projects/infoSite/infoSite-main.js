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

app.use(base_router);

// app.use((req, res) => {
//   res.render('404');
// });

app.use('/user{s}', users_router);

app
  .route('/book')
  .get((req, res) => {
    res.send('Get a random book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update the book');
  });

app.get('/{*splat}', (req, res) => {
  res.status(404).render('404');
});
