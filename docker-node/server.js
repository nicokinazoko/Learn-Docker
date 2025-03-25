import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('nico coba');
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('App running on port', 3000);
});
