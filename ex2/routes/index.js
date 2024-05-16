var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:16000/contratos')
  .then(resp => {
    var contratos = resp.data;
    res.status(200).render('index', {"ListaContratos": contratos, "data": d});
  })
  .catch(erro => {
    res.status(501).render('error', erro);
  });
});

router.get('/:id', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:16000/contratos/' + req.params.id)
  .then(resp => {
    var contrato = resp.data;
    res.status(200).render('idContrato', {"Contrato": contrato, "data": d});
  })
  .catch(erro => {
    res.status(502).render('error', erro);
  });
});

router.get('/entidades/:id', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:16000/contratos?entidade=' + req.params.id)
  .then(resp => {
    var entidade = resp.data;
    res.status(200).render('entidades', {"entidade": entidade, "data": d});
  })
  .catch(erro => {
    res.status(503).render('error', erro);
  });
});

module.exports = router;
