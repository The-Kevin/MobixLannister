const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000

app.use(routes);
app.use(cors());

app.listen(process.env.PORT || port, () => {
    console.log("running");
})


module.exports = app;