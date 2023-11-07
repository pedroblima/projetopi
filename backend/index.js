const express = require('express');
const server =  express();
const delivery = require('./src/data/delivery.json');
<<<<<<< HEAD
const lanches = require('./src/data/lanche.json');

server.get('/delivery', (req, res) => {
    return res.json(delivery);
})
server.get('/lanche', (req, res) => {
    return res.json(lanches);
=======
const lanche = require('./src/data/lanche.json')

server.get('/delivery', (req, res) => {
    return res.json({delivery, lanche});
>>>>>>> b722f55e575fcb7c58769cefe10c64b4d3852364
})

server.listen(3000, () => {
    console.log('servidor esta funcionando')
})