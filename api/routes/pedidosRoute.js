const {Router} = require('express');
const PedidosController = require('../controllers/PedidosController');

const router = Router();

router.post('/pedidos', PedidosController.criaPedido);

router.post('/pedidos/:pedido_id', PedidosController.adicionarItemPedido)


module.exports = router;