const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const app = express()

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connecting to the Database");
    }
})

// GET - Retrieve the data from the server
app.get('/', (req, res) => {
    res.json("Hello World")
});

// POST - Send the data from frontend to backend 
app.post('/', (req, res) => {
    console.log(req.body);
});


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on Port", 3000);
    }
});