const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const mesas = require('./mesasRoute');
const itens = require('./itensRoute');
const pedidos = require('./pedidosRoute');

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        mesas,
        itens,
        pedidos
    )
}