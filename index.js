const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    //needs to be in milliseconds. We chose a length of 30 days per session
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//the first part of this statement is returning a function, which immediately uses the second part as an argument
require('./routes/authRoutes')(app);

//Dynamic port binding. Use boolean statement to say if Heroku has already defined and evironment variable (deployed), use that, otherwise (development) use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
