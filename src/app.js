const express = require('express');
const app = express();
app.use(express.json())
app.use('/',require('./routes/personal.routes'))
module.exports = app