const express = require('express');
const router = express.Router();
const alocacaoController = require('../Controller/AlocacaoController');
const concessionariaControllerr = require('../Controller/ConcessionariaController');
const clienteController = require('../Controller/ClienteController');
const quantidadeController = require('../Controller/QuantidadeController');

router.get('/alocacao', alocacaoController.getAlocacao);
router.get('/alocacao/:area', alocacaoController.getAlocaInnerAuto);
router.get('/concessionaria/:id/:area', concessionariaControllerr.getConcessionaria);
router.get('/clientes', clienteController.getClientes);
router.get('/quantidade/:id', quantidadeController.updateQuantidade);




module.exports = router;
