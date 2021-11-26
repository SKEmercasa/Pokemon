const express = require('express');
const app = express();
const pokemons = require('../data/dataPokemons.json');

app.get('/', function (req, res) {
    res.send(pokemons);
});

app.listen(3443, '192.168.1.100', () => {
    console.log('Example app listening at http://localhost:3443');
});