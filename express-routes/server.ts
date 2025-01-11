import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(`[The date is, ${new Date()}] ${req.method} ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.get('/notes', (req, res) => {
  res.send('GET request to Notes');
});

app.post('/notes/:noteId', (req, res) => {
  res.send(req.params);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
