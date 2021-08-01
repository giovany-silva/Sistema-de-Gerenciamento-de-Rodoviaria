var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Rodoviaria_Fernando');

var userSchema = new mongoose.Schema({
    nomeFuncionario: String,
    cpf: String,
    cargo: String,
    telefone: String,
    endereco: String
}, { collection: 'usercollection' }
);

var userSchema4 = new mongoose.Schema({
    codigo: String,
    ano: String,
    modelo: String,
    lugares: String,
    cnpj: String
}, { collection: 'onibuscollection' }
);

var userSchema3 = new mongoose.Schema({
    codigo: String,
    origem: String,
    destino: String,
    duracao: String,
    distancia: String,
    horaPartida: String,
    horaChegada: String,
    dias: String,
}, { collection: 'rotacollection' }
);

var userSchema1 = new mongoose.Schema({
    cpf: String,
    nome: String,
    origem: String,
    destino: String,
    data: String,
    horario: String,
    preco: String,
    codigo: String,
}, { collection: 'passagemcollection' }
);

var userSchema2 = new mongoose.Schema({
    nome: String,
    cnpj: String
}, { collection: 'empresacollection' }
);
module.exports = { Mongoose: mongoose, UserSchema: userSchema, OnibusSchema: userSchema4, RotaSchema: userSchema3, UserSchema1: userSchema1, UserSchema2: userSchema2 }

