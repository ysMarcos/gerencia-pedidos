const {Router} = require('express');
const MesaController = require('../controllers/MesaController');

const router = Router();

router.get('/mesas', MesaController.pegaTodasAsMesas);
router.get('/mesas/:id', MesaController.pegaUmaMesa);
router.post('/mesas', MesaController.criaMesa);
router.put('/mesas/:id', MesaController.atualizaMesa);
router.delete('/mesas/:id', MesaController.deletaMesa);

router.get('/reservas', MesaController.pegaTodasAsReservas);
router.get('/mesas/reservas/:reservaId', MesaController.pegaUmaReserva);
router.post('/mesas/:mesaId/reservas/', MesaController.criaReserva);
router.put('/reservas/:reservaId', MesaController.atualizaReserva);
router.delete('/mesas/reservas/:reservaId', MesaController.deletaReserva);

module.exports = router;