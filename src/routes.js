const { Router } = require('express');

// importações 

const start = require('./models/start');
const personagens = require('./models/personagens');
const capas = require('./models/capasLivros');
const livros = require('./models/livrosPersonagens');

const routes = Router();


routes.get("/", start);
routes.get("/personagens", personagens);
routes.get("/capas", capas);
routes.get("/livros", livros);


module.exports = routes;