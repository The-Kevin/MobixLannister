const { Router } = require('express');


const routes = Router();


routes.get("/", (req, res) => {
    res.send('Esta API foi feita para o meu desafio na Mobix!');
})


module.exports = routes;