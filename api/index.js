const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
const port = 3000;

routes(app)

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;