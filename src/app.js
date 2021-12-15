const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json())
app.use('/products',router);

//app.get('/', (req, res) => res.send('Welcome') )
module.exports = app;

