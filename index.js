const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//include database initialization
require('./db/mongoose'); //after that script execution
//our app can use database

//parser; Content-type: application/json
app.use(bodyParser.json());

//routes 
//tell the app to set the app prefix before routes
app.use('/api', apiRouter);

app.listen(port, function () {
    console.log("Server is listening... http://localhost:" + port);
});

