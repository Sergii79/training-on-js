const express = require('express');
const app = express();
const port = 3000;

const users = [
  { name: 'Oleg', age: 15 },
  { name: 'Sergey', age: 18 },
  { name: 'Olya', age: 21 },
];

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
