const express = require('express');
const app = express();
const port = 8183;

// Initialize a counter
let requestCounter = 0;

app.get('/brokerapi', (req, res) => {
  requestCounter++;
  //every even request is sucess
  if (requestCounter % 2 ==0) {
    res.status(200).send('Success');
  } else {
    res.status(403).send('Failure');
  }
});

app.listen(port, () => {
  console.log(`Broker API listening on port ${port}`);
});