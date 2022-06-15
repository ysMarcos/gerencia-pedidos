const {Router} = require('express');
const MesaController = require('../controllers/MesaController');

const router = Router();

router.get('/mesas', MesaController.pegaTodasAsMesas);
router.get('/mesas/:id', MesaController.pegaUmaMesa);
router.post('/mesas', MesaController.criaMesa);
router.put('/mesas/:id', MesaController.atualizaMesa);
router.delete('/mesas/:id', MesaController.deletaMesa);

module.exports = router;