var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Release0');

var userSchema = new mongoose.Schema({
    nomeFuncionario: String,
    cpf: String,
    cargo: String,
    telefone: String,
    endereco: String
}, { collection: 'usercollection' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }