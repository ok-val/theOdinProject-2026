import express from 'express';
import base_router from './routes/base.routes.js';

const app = express();
const local_endpoint = 3000;

app.set('view engine', 'ejs');
app.set('views', './projects/infoSite/views');
// console.log(app.set());

app.listen(local_endpoint, () => {
  console.log('Listening on port 3000');
});

app.use(base_router);

app.use((req, res) => {
  res.send('404');
});
