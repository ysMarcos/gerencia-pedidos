const {Router} = require('express');
const ItemController = require('../controllers/ItemController');

const router = Router();

router.get('/itens', ItemController.pegaTodosOsItens);
router.get('/itens/:id', ItemController.pegaUmItem);
router.post('/itens', ItemController.criaItem);
router.put('/itens/:id', ItemController.atualizaItem);
router.delete('/itens/:id', ItemController.deletaItem);

module.exports = router;