const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const mesas = require('./mesasRoute');
const itens = require('./itensRoute');


module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        mesas,
        itens
    )
}