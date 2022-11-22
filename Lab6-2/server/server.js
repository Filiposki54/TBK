const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello form Docker server');
});
app.get('/data', (req, res) => {
  res.send({ data: ['dataOne', 'dataTwo', 'dataThree', 'dataFour'] });
});
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
