var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos');
var fs = require('fs');

/* GET home page. */
router.get('/contratos', function(req, res, next) {
  // GET /contratos?entidade=EEEE:
  if(req.query.entidade){
    const esp = req.query.entidade
    Contrato.findByEntidade(esp)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  // GET /contratos?tipo=AAA
  else if(req.query.tipo){
    const imp = req.query.tipo
    Contrato.findByTipo(imp)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  // GET /contratos : devolve a lista de contratos
  else {
    Contrato.list()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
});

router.get('/contratos/entidades', function(req, res, next) {
  Contrato.listEntidades()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.get('/contratos/tipo', function(req, res, next) {
  Contrato.listTipos()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.get('/contratos/:id', function(req, res, next) {
  Contrato.findById(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.put('/contratos/:id', function(req, res, next) {
  Contrato.change(req.params.id, req.body)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.delete('/contratos/:id', function(req, res, next) {
  Contrato.remove(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

module.exports = router;
