const express = require('express');
const app = express();
const route = require('./routes/route');
const bodyParser = require('body-parser');
const createError = require('http-errors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

require('./configuration/database.config');

//Express Validator
const expressValidator = require('express-validator');
app.use(expressValidator());


app.use("/choco/customer/catalog", route);




app.use((req, res, next) => {
    next(createError(404));
})

app.use((error, req, res, next) => {
    let response = {
        success: false,
        status: 500,
        message: error.message
    };
    res.json(response);
})





//Listening to Port 3000
app.listen(3000, () => {
    console.log("Listening to port 3000.");
})