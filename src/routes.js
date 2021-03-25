const { Router } = require('express');

// importações 

const personagens = require('./models/personagens');
const capas = require('./models/capasLivros');
const livros = require('./models/livrosPersonagens');

const routes = Router();


routes.get("/", (req, res) => {
    res.send('Esta API foi feita para o meu desafio na Mobix!');
})

routes.get("/personagens", personagens);
routes.get("/capas", capas);
routes.get("/livros", livros);


module.exports = routes;