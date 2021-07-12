var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/menu', function(req, res, next) {
  res.render('menu');
});

/* GET home page. */
router.get('/funcionario', function(req, res, next) {
  res.render('funcionario');
});

/* GET userlist page. */
router.get('/funcionariolist', function(req, res) {
    var db = require("../db");
    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Users.find({}).lean().exec(
       function (e, docs) {
           res.render('funcionariolist', { "funcionariolist": docs });
       });
});

/* GET newuser page. */
router.get('/addFuncionario', function (req, res, next) {
  res.render('addFuncionario', { title: 'Novo Funcionário' });
});

// POST to Add User Service 
router.post('/addfuncionario', function (req, res) {
  
  var db = require("../db");
  var nomeFuncionario = req.body.funcionarioNome;
  var cpfFuncionario = req.body.funcionarioCPF;
  var cargoFuncionario = req.body.funcionarioCargo;
  var enderecoFuncionario = req.body.funcionarioEndereco;
  var telefoneFuncionario = req.body.funcionarioTelefone;
  
  
  var Funcionarios = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  
  var fun = new Funcionarios({ nomeFuncionario: nomeFuncionario, cpf: cpfFuncionario, cargo: cargoFuncionario, telefone: telefoneFuncionario, endereco: enderecoFuncionario });
  fun.save(function (err) {
      if (err) {
          console.log("Error! " + err.message);
          return err;
      }
      else {
          console.log("Post saved");
          res.redirect("funcionariolist");
      }
  });
});


/* GET deleta page. */
router.get('/removeFuncionario', function (req, res, next) {
  res.render('removeFuncionario', { title: 'Remove Funcionario' });
});

/* POST to Remover Cliente */
router.post('/removefuncionario', function (req, res) {

  var db = require("../db");
  var cpfFuncionario = req.body.funcionarioCPF;

  
  var Funcionario = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Funcionario.remove({cpf: cpfFuncionario}, function (err) {
      if (err) {
          console.log("Error! " + err.message);
          return err;
      }
      else {
          console.log("Post deleted");
          res.redirect("funcionariolist");
      }
  });
});

/* GET search page. */
router.get('/consultaFuncionario', function (req, res, next) {
  res.render('consultaFuncionario', { title: 'Consulta Funcionario' });
});

/* GET clientlist page. */
router.post('/retornolist', function(req, res) {
  var db = require("../db");

  var cpfFuncionario = req.body.funcionarioCPF;

  var Funcionarios = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Funcionarios.find({cpf: cpfFuncionario}).lean().exec(
     function (e, docs) {
         res.render('retornolist', { "retornolist": docs });
     });
});

/* GET uptade page. */
router.get('/atualizaFuncionario', function (req, res, next) {
  res.render('atualizaFuncionario', { title: 'Atualiza Funcionario' });
});

/* POST to Atualizar Cliente */
router.post('/atualizafuncionario', function (req, res) {

  var db = require("../db");
  var cpfFuncionario = req.body.funcionarioCPF;

  var novoNomeFuncionario = req.body.newname;
  var novoCPFFuncionario = req.body.newCPF;
  var novoCargoFuncionario = req.body.newCargo;
  var novoEnderecoFuncionario = req.body.newEndereco;
  var novoTelefoneFuncionario = req.body.newTelefone;

  
  var Funcionarios = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Funcionarios.update({ cpf: cpfFuncionario },{ nomeFuncionario: novoNomeFuncionario, cpf: novoCPFFuncionario, cargo: novoCargoFuncionario, endereco: novoEnderecoFuncionario, telefone: novoTelefoneFuncionario },function (err) {
    if (err) {
        console.log("Error! " + err.message);
        return err;
    }
    else {
        console.log("Updated");
        res.redirect("funcionariolist");
    }
  });
});

module.exports = router;