const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json())
app.use('/products', router);

//  app.get('/', (req, res) => res.send('Welcome') )
module.exports = app;
