const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/server');

dotenv.config();


const app = express()

// Middlwares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connecting to the Database");
    }
});

// Require api
const productRoutes = require('./routes/product');
app.use('/api', productRoutes);


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on Port", 3000);
    }
});