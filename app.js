const express = require('express');
const bodyParser= require('body-parser');
const candidateRoute = require('./routes/candidateRoute');
const scoreRoute = require('./routes/scoreRoute');


const app = express();
app.use(bodyParser.json());


app.get('/',(req,res) => {
     res.send('Home');
});

//Use Routes here
app.use('/candidate',candidateRoute);
app.use('/score',scoreRoute);

module.exports = app;