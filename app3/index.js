const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from App 3!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App 3 is listening on port ${port}`);
});
