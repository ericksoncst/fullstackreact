const express = require('express');
const mongoose = require('mongoose');
const cokkieSession = require('cookie-session');
const passport = require('passport');
const { mongoURI, cookieKey } = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();

app.use(
    cokkieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //one month
        keys: [ cookieKey ]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(mongoURI, { useNewUrlParser : true })
    .then(
        app.listen(PORT, ()=> {
            console.log(`Server running on port ${PORT}`);
            console.log('Mongo ok');
        })
    )
    .catch(err => console.log(err));
