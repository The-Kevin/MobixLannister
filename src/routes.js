const { Router } = require('express');

// importações 

const start = require('./models/start');
const personagens = require('./models/personagens');
const capas = require('./models/capasLivros');
const livros = require('./models/livrosPersonagens');
const jaimeLannister = require('./models/jaime');
const sansaStark = require('./models/sansa');
const aryaStark = require('./models/arya');

const routes = Router();


routes.get("/", start);
routes.get("/personagens", personagens);
routes.get("/capas", capas);
routes.get("/livros", livros);
routes.get("/jaime", jaimeLannister);
routes.get("/sansa", sansaStark);
routes.get("/arya", aryaStark);


module.exports = routes;