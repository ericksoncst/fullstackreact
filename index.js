const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();

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
