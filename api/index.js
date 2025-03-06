const express = require('express');
const app = express();
const port = 8181;

// Initialize a counter
let requestCounter = 0;

app.get('/', (req, res) => {
  res.send({message: 'alive'})
});

app.get('/summary', (req, res) => {
  // Increment the counter for every request
  requestCounter++;
  const currentDateTime = new Date().toISOString();
  res.send({
    source: 'success',
    summary: `Total requests so far: ${requestCounter}`,
    counter: requestCounter,
    datetime: currentDateTime
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
