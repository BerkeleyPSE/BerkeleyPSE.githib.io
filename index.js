// NPM Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Local Imports
const keys = require('./config/keys.js');
// REQUIRE MODELS HERE

const app = express();

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

/*** MIDDLEWARE ***/

app.use(bodyParser.json());

// REQUIRE ROUTES HERE

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('./client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build/', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
