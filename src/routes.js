const { Router } = require('express');

// importações 

const personagens = require('./models/personagens');

const routes = Router();


routes.get("/", (req, res) => {
    res.send('Esta API foi feita para o meu desafio na Mobix!');
})

routes.get("/personagens", personagens);

module.exports = routes;