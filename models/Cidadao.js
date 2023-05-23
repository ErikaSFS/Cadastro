const mongoose = require('mongoose');

const Cidadao = mongoose.model('Cidadao', {
    nome: String,
    CPF: Number,
    Endereco: String,
    Sexo: String,
})


module.exports = Cidadao

