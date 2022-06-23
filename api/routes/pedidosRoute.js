const {Router} = require('express');
const PedidosController = require('../controllers/PedidosController');

const router = Router();

router.post('/pedidos', PedidosController.criaPedido);
router.post('/pedidos/:pedido_id', PedidosController.adicionarItemPedido)

router.get('/pedidos/:pedido_id', PedidosController.pegaValorTotal)

router.get('/pedidos', PedidosController.pegarTodosOsPedidos);
router.get('/pedido/:id', PedidosController. pegaUmPedido);
router.get('/ativos', PedidosController.pegaPedidosAtivos);
router.put('/pedido/:id', PedidosController.atualizaStatusPedido)

module.exports = router;