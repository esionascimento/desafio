const express = require('express');
const app = express()

app.get('/', function (_req, res) {
  res.send('Hello World');
})
app.listen(4000);