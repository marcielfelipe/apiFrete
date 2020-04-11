const express = require ('express');
const frete = require('./Controllers/FreteConstroller');

const routes  = express.Router();

routes.post('/frete',frete.store);

module.exports = routes;