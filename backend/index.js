const express = require('express');
const server =  express();
const delivery = require('./src/data/delivery.json');
const lanches = require('./src/data/lanche.json');

server.get('/delivery', (req, res) => {
    return res.json(delivery);
})
server.get('/lanche', (req, res) => {
    return res.json(lanches);
})

server.listen(3000, () => {
    console.log('servidor esta funcionando')
})