var mongoose = require('mongoose');
const { modelName} = require('../models/contratos');
var Contrato = require('../models/contratos');

module.exports.findByEntidade = ent => {
    return Contrato
        .find({ NIPC_entidade_comunicante: ent })
        .exec()
}

module.exports.findByTipo = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec()
}

module.exports.list = async () => {
    return await Contrato
        .find()
        .exec()
}

module.exports.findById = id => {
    return Contrato
        .findOne({ _id: id })
        .exec()
}

module.exports.listEntidades =  () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort({ entidade_comunicante: 1})
        .exec()
}

module.exports.listTipos =  () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort({ tipoprocedimento: 1})
        .exec()
}

module.exports.change = contrato => {
    return Contrato.updateOne({_id: contrato._id}, contrato)
    .then(data => {
        return data
    })
    .catch(erro => {
        return erro
    })
}

module.exports.remove = id => {
    return Contrato.deleteOne({_id: id})
    .then(data => {
        return data
    })
    .catch(erro => {
        return erro
    })
}