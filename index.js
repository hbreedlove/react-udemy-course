const express = require('express');
const app = express();

//this is a route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//Dynamic port binding. Use boolean statement to say if Heroku has already defined and evironment variable (deployed), use that, otherwise (development) use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
