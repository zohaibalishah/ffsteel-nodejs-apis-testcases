const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ statis: 1, message: 'hello word' });
});

app.get('/users', (req, res) => {
  res.status(200).json({ statis: 1, message: 'hi' });
});

app.post('/users', (req, res) => {
  res.status(200).json({ statis: 1, message: 'hi' });
});

app.get('/zohaib', (req, res) => {
  res.status(200).json({ statis: 1, message: 'hi zohaib' });
});


app.listen(3000, () => {
  console.log('server on 3000');
});

module.exports = app;
