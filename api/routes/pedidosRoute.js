const {Router} = require('express');
const PedidosController = require('../controllers/PedidosController');

const router = Router();

router.post('/pedidos', PedidosController.criaPedido);

router.post('/pedidos/:pedido_id', PedidosController.adicionarItemPedido)
router.get('/pedidos/:pedido_id', PedidosController.pegaValorTotal)
router.get('/pedidos', PedidosController.pegarTodosOsPedidos);
router.get('/pedido/:id', PedidosController. pegaUmPedido);

module.exports = router;