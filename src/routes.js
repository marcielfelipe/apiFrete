const express = require('express');
const frete = require('./Controllers/freteController')
const routes = express.Router();

routes.post('/', frete.index);


module.exports = routes;