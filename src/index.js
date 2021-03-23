const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();
app.use(routes);
app.use(cors());

app.listen(3000, () => {
    console.log("work!");
});
