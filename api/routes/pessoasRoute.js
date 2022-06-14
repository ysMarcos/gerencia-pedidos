const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaNovaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.deletaPessoa);

router.get('/funcionarios', PessoaController.pegaFuncionarios);

module.exports = router;