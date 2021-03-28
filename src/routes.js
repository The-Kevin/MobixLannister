const express = require('express');

// importações 

const start = require('./models/start');
const personagens = require('./models/personagens');
const capas = require('./models/capasLivros');
const livrosPersonagem = require('./models/livrosPersonagens');
const jaimeLannister = require('./models/jaime');
const sansaStark = require('./models/sansa');
const aryaStark = require('./models/arya');
const personagemUnico = require('./models/personagemUnico');
const livros = require('./models/Livros');

const routes = express.Router();


routes.get("/", start);
routes.get("/personagens", personagens);
routes.get("/capas", capas);
routes.get("/livros/:id", livros);
routes.get("/livrosPersonagem", livrosPersonagem);
routes.get("/personagemUnico/:id", personagemUnico);
routes.get("/jaime", jaimeLannister);
routes.get("/sansa", sansaStark);
routes.get("/arya", aryaStark);


module.exports = routes;