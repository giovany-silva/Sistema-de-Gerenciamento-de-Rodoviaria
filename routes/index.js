var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET menu. */
router.get('/menu', function(req, res, next) {
  res.render('menu');
});

/* GET funcionario. */
router.get('/funcionario', function(req, res, next) {
  res.render('funcionario');
});

/* GET verificaPassagem. */
router.get('/verificaPassagem', function(req, res, next) {
  res.render('verificaPassagem');
});

/* GET verificaPassagem. */
router.get('/verificaData', function(req, res, next) {
  res.render('verificaData');
});

/* GET verificaPassagem. */
router.get('/verificaOnibus', function(req, res, next) {
  res.render('verificaOnibus');
});

/* GET verificaPassagem. */
router.get('/verificaCNPJ', function(req, res, next) {
  res.render('verificaCNPJ');
});

/* GET verificaPassagem. */
router.get('/relatorioEmpresa', function(req, res, next) {
  res.render('relatorioEmpresa');
});

/* GET verificaPassagem. */
router.get('/relatorioRotaDia', function(req, res, next) {
  res.render('relatorioRotaDia');
});

/* GET verificaPassagem. */
router.get('/RelatorioPassagem', function(req, res, next) {
  res.render('RelatorioPassagem');
});

/* GET onibus. */
router.get('/onibus', function(req, res, next) {
  res.render('onibus');
});

/* GET rota. */
router.get('/rotas', function(req, res, next) {
  res.render('rotas');
});

/* GET passagem page. */
router.get('/passagem', function(req, res, next) {
  res.render('passagem');
});

/* GET passagem page. */
router.get('/empresas', function(req, res, next) {
  res.render('empresas');
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

/* GET onibuslist page. */
router.get('/onibuslist', function(req, res) {
  var db = require("../db");
  var Oni = db.Mongoose.model('onibuscollection', db.OnibusSchema, 'onibuscollection');
  Oni.find({}).lean().exec(
     function (e, docs) {
         res.render('onibuslist', { "onibuslist": docs });
     });
});

/* GET rotalist page. */
router.get('/rotalist', function(req, res) {
  var db = require("../db");
  var Rota = db.Mongoose.model('rotacollection', db.RotaSchema, 'rotacollection');
  Rota.find({}).lean().exec(
     function (e, docs) {
         res.render('rotalist', { "rotalist": docs });
     });
});

/* GET passagemlist page. */
router.get('/passagemlist', function(req, res) {
  var db = require("../db");
  var Users = db.Mongoose.model('passagemcollection', db.UserSchema1, 'passagemcollection');
  Users.find({}).lean().exec(
     function (e, docs) {
         res.render('passagemlist', { "passagemlist": docs });
     });
});
/* GET empresalist page. */
router.get('/empresalist', function(req, res) {
  var db = require("../db");
  var Users = db.Mongoose.model('empresacollection', db.UserSchema2, 'empresacollection');
  Users.find({}).lean().exec(
     function (e, docs) {
         res.render('empresalist', { "empresalist": docs });
     });
});

/* GET empresalist page. */
router.get('/relatorioPassagemList', function(req, res) {
  var db = require("../db");
  var Users = db.Mongoose.model('passagemcollection', db.UserSchema1, 'passagemcollection');
  Users.find({}).lean().exec(
     function (e, docs) {
         res.render('relatorioPassagemList', { "relatorioPassagemList": docs });
     });
});

/* GET onibuslist page. */
router.get('/relatorioEmpresa', function(req, res) {
  var db = require("../db");
  var Oni = db.Mongoose.model('onibuscollection', db.OnibusSchema, 'onibuscollection');
  Oni.find({}).lean().exec(
     function (e, docs) {
         res.render('relatorioEmpresa', { "relatorioEmpresa": docs });
     });
});

/* GET newuser page. */
router.get('/addFuncionario', function (req, res, next) {
  res.render('addFuncionario', { title: 'Novo Funcionário' });
});

// POST to Add User Service 
router.post('/addfuncionario', function (req, res) {
  
  var db = require("../db");
  var nomeFunc = req.body.funcionarioNome;
  var cpfFuncionario = req.body.funcionarioCPF;
  var cargoFuncionario = req.body.funcionarioCargo;
  var enderecoFuncionario = req.body.funcionarioEndereco;
  var telefoneFuncionario = req.body.funcionarioTelefone;
  
  var Funcionarios = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  
  var fun = new Funcionarios({ nomeFuncionario: nomeFunc, cpf: cpfFuncionario, cargo: cargoFuncionario, telefone: telefoneFuncionario, endereco: enderecoFuncionario });
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

/* ------------------------------------------ ONIBUS ------------------------------------------*/

/* GET funcionario page. */
router.get('/addOnibus', function (req, res, next) {
  res.render('addOnibus', { title: 'Novo Ônibus' });
});

// POST to Add Onibus Service 
router.post('/addonibus', function (req, res) {
  
  var db = require("../db");
  var codigoOnibus = req.body.onibusCodigo;
  var anoOnibus = req.body.onibusAno;
  var modeloOnibus = req.body.onibusModelo;
  var lugaresOnibus = req.body.onibusLugares;
  var cnpjOnibus = req.body.onibusCNPJ;
  
  var Empresas = db.Mongoose.model('empresacollection', db.UserSchema2, 'empresacollection');
  Empresas.find({cnpj:cnpjOnibus}).lean().exec(
    function (e, docs) {
      foiCriada = false;

      docs.forEach(element => {
        if(element.cnpj == cnpjOnibus)
        {
          foiCriada = true;
          console.log(element.cnpj);
        }
      });
      if(foiCriada == true)
      {
        var Onibus = db.Mongoose.model('onibuscollection', db.OnibusSchema, 'onibuscollection');
  
        var oni = new Onibus({codigo: codigoOnibus, ano: anoOnibus, modelo: modeloOnibus, lugares: lugaresOnibus, cnpj: cnpjOnibus});
        oni.save(function (err) {
          if (err) {
            console.log("Error! " + err.message);
            return err;
          }
          else {
            console.log(req.body);
            console.log("Post saved");
            res.redirect("onibuslist");
          }
        });
      }
      else
      {
            res.redirect("verificaCNPJ");
      }
    });
});
  

/* GET search onibus. */
router.get('/consultaOnibus', function (req, res, next) {
  res.render('consultaOnibus', { title: 'Consulta Ônibus' });
});

/* GET clientlist page. */
router.post('/retornoonibus', function(req, res) {
  var db = require("../db");

  var codigoOnibus = req.body.onibusCodigo;

  var Onibus = db.Mongoose.model('onibuscollection', db.OnibusSchema, 'onibuscollection');
  Onibus.find({codigo: codigoOnibus}).lean().exec(
     function (e, docs) {
         res.render('onibuslist', { "onibuslist": docs });
     });
});

/* GET uptade Onibus. */
router.get('/atualizaOnibus', function (req, res, next) {
  res.render('atualizaOnibus', { title: 'Atualiza Ônibus' });
});

/* POST to Atualizar Onibus */
router.post('/atualizaonibus', function (req, res) {

  var db = require("../db");
  var codigoOnibus = req.body.onibusCodigo;

  var novoCodigoOnibus = req.body.newCodigo;
  var novoAnoOnibus = req.body.newAno;
  var novoModeloOnibus = req.body.newModelo;
  var novoLugaresOnibus = req.body.newLugares;
  var novocnpjOnibus = req.body.newCNPJ;
  
  var Onibus = db.Mongoose.model('onibuscollection', db.OnibusSchema, 'onibuscollection');
  Onibus.update({ codigo: codigoOnibus },{ codigo: novoCodigoOnibus, ano: novoAnoOnibus, modelo: novoModeloOnibus, lugares: novoLugaresOnibus, cnpj: novocnpjOnibus},function (err) {
    if (err) {
        console.log("Error! " + err.message);
        return err;
    }
    else {
        console.log("Updated");
        res.redirect("onibuslist");
    }
  });
});

/* GET deleta Onibus. */
router.get('/removeOnibus', function (req, res, next) {
  res.render('removeOnibus', { title: 'Remove Ônibus' });
});

/* POST to Remover Onibus */
router.post('/removeonibus', function (req, res) {

  var db = require("../db");
  var codigoOnibus = req.body.onibusCodigo;

  
  var Onibus = db.Mongoose.model('onibuscollection', db.OnibusSchema, 'onibuscollection');

  Onibus.remove({codigo: codigoOnibus}, function (err) {
      if (err) {
          console.log("Error! " + err.message);
          return err;
      }
      else {
          console.log("Post deleted");
          res.redirect("onibuslist");
      }
  });
});

/* ------------------------------------------ ROTAS ------------------------------------------*/
/* GET rota page. */
router.get('/addRota', function (req, res, next) {
  res.render('addRota', { title: 'Nova Rota' });
});

// POST to Add Rota Service 
router.post('/addrota', function (req, res) {
  
  var db = require("../db");
  var codigoRota = req.body.rotaCodigo;
  var origemRota = req.body.rotaOrigem;
  var destinoRota = req.body.rotaDestino;
  var duracaoRota = req.body.rotaDuracao;
  var distanciaRota = req.body.rotaDistancia;
  var partidaRota = req.body.rotaPartida;
  var chegadaRota = req.body.rotaChegada;
  var diasRota = req.body.rotaDias;
  
  
  var Rota = db.Mongoose.model('rotacollection', db.RotaSchema, 'rotacollection');
  
  var ro = new Rota({ codigo: codigoRota, origem: origemRota, destino: destinoRota, duracao: duracaoRota, distancia: distanciaRota, horaPartida: partidaRota, horaChegada: chegadaRota, dias: diasRota});
  ro.save(function (err) {
      if (err) {
          console.log("Error! " + err.message);
          return err;
      }
      else {
          console.log("Post saved");
          res.redirect("rotalist");
      }
  });
});

/* GET search Rota. */
router.get('/consultaRota', function (req, res, next) {
  res.render('consultaRota', { title: 'Consulta Rota' });
});

/* GET clientlist page. */
router.post('/rotalist', function(req, res) {
  var db = require("../db");

  var codigoRota = req.body.rotaCodigo;

  var Rota = db.Mongoose.model('rotacollection', db.RotaSchema, 'rotacollection');
  Rota.find({codigo: codigoRota}).lean().exec(
     function (e, docs) {
         res.render('rotalist', { "rotalist": docs });
     });
});

/* GET uptade Rota. */
router.get('/atualizaRota', function (req, res, next) {
  res.render('atualizaRota', { title: 'Atualiza Rota' });
});
/* POST to Atualizar Rota */
router.post('/atualizarota', function (req, res) {

  var db = require("../db");
  var codigoRota = req.body.rotaCodigo;

  var novoCodigoRota = req.body.newCodigo;
  var novoOrigemRota = req.body.newOrigem;
  var novoDestinoRota = req.body.newDestino;
  var novoDuracaoRota = req.body.newDuracao;
  var novoDistanciaRota = req.body.newDistancia;
  var novoPartidaRota = req.body.newPartida;
  var novoChegadaRota = req.body.newChegada;
  var novoDiasRota = req.body.newDias;

  
  var Rota = db.Mongoose.model('rotacollection', db.RotaSchema, 'rotacollection');
  Rota.update({ codigo: codigoRota },{ codigo: novoCodigoRota, origem: novoOrigemRota, destino: novoDestinoRota, duracao: novoDuracaoRota, distancia: novoDistanciaRota, horaPartida: novoPartidaRota, horaChegada: novoChegadaRota, dias: novoDiasRota},function (err) {
    if (err) {
        console.log("Error! " + err.message);
        return err;
    }
    else {
        console.log("Updated");
        res.redirect("rotalist");
    }
  });
});

/* GET deleta Rota. */
router.get('/removeRota', function (req, res, next) {
  res.render('removeRota', { title: 'Remove Rota' });
});

/* POST to Remover Onibus */
router.post('/removerota', function (req, res) {

  var db = require("../db");
  var codigoRota = req.body.rotaCodigo;

  var origemRemocao = null;
  var destinoRemocao = null;  

  var Rota = db.Mongoose.model('rotacollection', db.RotaSchema, 'rotacollection');
  Rota.find({codigo: codigoRota}).lean().exec(
    function (e, docs) {

        docs.forEach(element => {
          origemRemocao = element.origem;
          destinoRemocao = element.destino;

          var Pass = db.Mongoose.model('passagemcollection', db.UserSchema1, 'passagemcollection');

          console.log(origemRemocao);

          Pass.find({origem: origemRemocao, destino: destinoRemocao}).lean().exec(
            function (e, docs) {
              foiCriada = false;
              docs.forEach(element => {
                if(element != null)
                {
                  foiCriada = true;
                  console.log(element);
                  res.redirect("verificaPassagem");
                }
              });
              if(foiCriada == false)
              {
                Rota.remove({codigo: codigoRota}, function (err) {
                  if (err) {
                      console.log("Error! " + err.message);
                      return err;
                  }
                  else {
                      console.log("Post deleted");
                      res.redirect("rotalist");
                  }
              });
            }  
        });
        
      });
        
    });
  
});

/* ------------------------------------------ PASSAGEM ------------------------------------------*/

/* GET adiciona Passagem. */
router.get('/addPassagem', function (req, res, next) {
  res.render('addPassagem', { title: 'Adicionar Passagem' });
});

/* POST adiciona Passagem */
router.post('/addpassagem', function (req, res) {

  var db = require("../db");
  var cpfPassagem = req.body.passagemCPF;
  var nomePassagem = req.body.passagemNome;
  var origemPassagem = req.body.passagemOrigem;
  var destinoPassagem = req.body.passagemDestino;
  var dataPassagem = req.body.passagemData;
  var horarioPassagem = req.body.passagemHorario;
  var precoPassagem = req.body.passagemPreco;
  var codigoPassagem = req.body.passagemCodigo;

  
  
  var Passagens = db.Mongoose.model('passagemcollection', db.UserSchema1, 'passagemcollection');
  var pas = new Passagens({ cpf: cpfPassagem, nome: nomePassagem, origem: origemPassagem, destino: destinoPassagem, data: dataPassagem,horario: horarioPassagem, 
  preco: precoPassagem,codigo: codigoPassagem});

  pas.save(function (err) {
      if (err) {
          console.log("Error! " + err.message);
          return err;
      }
      else {
          console.log("Post saved");
          res.redirect("passagemlist");
      }
  });
});

/* GET atualiza Passagem. */
router.get('/atualizaPassagem', function (req, res, next) {
  res.render('atualizaPassagem', { title: 'Atualizar Passagem' });
});

/* POST atualizar Passagem */
router.post('/atualizapassagem', function (req, res) {

 var db = require("../db");
  var cpfPassagem = req.body.passagemNovoCPF;
  var nomePassagem = req.body.passagemNovoNome;
  var origemPassagem = req.body.passagemNovaOrigem;
  var destinoPassagem = req.body.passagemNovoDestino;
  var dataPassagem = req.body.passagemNovaData;
  var horarioPassagem = req.body.passagemNovoHorario;
  var precoPassagem = req.body.passagemNovoPreco;
  var codigoPassagem = req.body.passagemNovoCodigo;


  var Passagens = db.Mongoose.model('passagemcollection', db.UserSchema1, 'passagemcollection');
  
  Passagens.update({ cpf: cpfPassagem },{nome: nomePassagem, origem: origemPassagem, destino: destinoPassagem, data: dataPassagem,horario: horarioPassagem, 
  preco: precoPassagem,codigo: codigoPassagem},function (err) {
    if (err) {
        console.log("Error! " + err.message);
        return err;
    }
    else {
        console.log("Updated");
        res.redirect("passagemlist");
    }
  });
});



/* GET remove Passagem. */
router.get('/removePassagem', function (req, res, next) {
  res.render('removePassagem', { title: 'Remover Passagem' });
});

/* POST remove Passagem. */
router.post('/removepassagem', function (req, res) {

  var db = require("../db");
  var cpfPassagem = req.body.passagemNovoCPF;


  var Passagens = db.Mongoose.model('passagemcollection', db.UserSchema1, 'passagemcollection');
  Passagens.find({cpf: cpfPassagem}).lean().exec(
    function (e, docs) {
        docs.forEach(element => {
          dataPass = element.data;

          console.log(dataPass);

          dataAtual = new Date();
          dataPass = new Date(dataPass);

            if(dataPass < dataAtual)
            {
              res.redirect("verificaData");
            }
            else
            {
              Passagens.remove({cpf: cpfPassagem}, function (err) {
                if (err) {
                    console.log("Error! " + err.message);
                    return err;
                }
                else {
                    console.log("Post deleted");
                    res.redirect("passagemlist");
                }
              });
            }
        });
    }  
  ); 
});
  


/* GET consulta Passagem. */
router.get('/consultaPassagem', function (req, res, next) {
  res.render('consultaPassagem', { title: 'Consultar Passagem' });
});

/* POST consulta Passagem. */
router.post('/consultapassagem', function(req, res) {
  var db = require("../db");


 var cpfPassagem = req.body.passagemCPF;

  var Passagens = db.Mongoose.model('passagemcollection', db.UserSchema1, 'passagemcollection');
  Passagens.find({cpf: cpfPassagem}).lean().exec(
     function (e, docs) {
         res.render('passagemlist', { "passagemlist": docs });
     });
});


/* ------------------------------------------ EMPRESA ------------------------------------------*/

/* GET adiciona Empresa. */
router.get('/addEmpresa', function (req, res, next) {
  res.render('addEmpresa', { title: 'Cadastrar Empresa' });
});

/* POST adiciona Empresa */
router.post('/addempresa', function (req, res) {

  var db = require("../db");
  var cnpjEmpresa = req.body.empresaCNPJ;
  var nomeEmpresa = req.body.empresaNome;
 

  var Empresas = db.Mongoose.model('empresacollection', db.UserSchema2, 'empresacollection');
  var emp = new Empresas({ cnpj: cnpjEmpresa, nome: nomeEmpresa});

  emp.save(function (err) {
      if (err) {
          console.log("Error! " + err.message);
          return err;
      }
      else {
          console.log("Post saved");
          res.redirect("empresalist");
      }
  });
});

/* GET atualiza Empresa. */
router.get('/atualizaEmpresa', function (req, res, next) {
  res.render('atualizaEmpresa', { title: 'Atualizar Empresa' });
});

/* POST atualizar Empresa */
router.post('/atualizaempresa', function (req, res) {

 var db = require("../db");
  
  var novoCNPJEmpresa = req.body.empresaNovoCNPJ;
  var novoNomeEmpresa = req.body.empresaNovoNome;
  var cnpjEmpresa = req.body.empresaCNPJ;
  var nomeEmpresa = req.body.empresaNome;


  var Empresas = db.Mongoose.model('empresacollection', db.UserSchema2, 'empresacollection');
  
  Empresas.update({ cnpj: cnpjEmpresa,nome:nomeEmpresa },{ cnpj: novoCNPJEmpresa,nome:novoNomeEmpresa },function (err) {
    if (err) {
        console.log("Error! " + err.message);
        return err;
    }
    else {
        console.log("Updated");
        res.redirect("empresalist");
    }
  });
});


/* GET remove Empresa. */
router.get('/removeEmpresa', function (req, res, next) {
  res.render('removeEmpresa', { title: 'Remover Empresa' });
});

/* POST remove Empresa. */
router.post('/removeempresa', function (req, res) {

  var db = require("../db");
  var cnpjEmpresa = req.body.empresaCNPJ;


  var Oni = db.Mongoose.model('onibuscollection', db.OnibusSchema, 'onibuscollection');
  Oni.find({cnpj: cnpjEmpresa}).lean().exec(
    function (e, docs) {
              foiCriada = false;
              docs.forEach(element => {
                if(element != null)
                {
                  foiCriada = true;
                  console.log(element.ano);
                  
                }

              });
              if(foiCriada == true) 
              {
                res.redirect("verificaOnibus");
              }
              else
              {
                var Empresas = db.Mongoose.model('empresacollection', db.UserSchema2, 'empresacollection');
                Empresas.remove({cnpj: cnpjEmpresa}, function (err) {
                if (err) {
                    console.log("Error! " + err.message);
                    return err;
                }
                else {
                    console.log("Post deleted");
                    res.redirect("empresalist");
                }
                });
              } 
    }   
    ); 
});

/* GET consulta Empresa. */
router.get('/consultaEmpresa', function (req, res, next) {
  res.render('consultaEmpresa', { title: 'Consultar Empresa' });
});

/* POST consulta Empresa. */
router.post('/consultaempresa', function(req, res) {
  var db = require("../db");

 var cnpjEmpresa = req.body.empresaCNPJ;

  var Empresas = db.Mongoose.model('empresacollection', db.UserSchema2, 'empresacollection');
  Empresas.find({cnpj:cnpjEmpresa}).lean().exec(
     function (e, docs) {
         res.render('empresalist', { "empresalist": docs });
     });
});

 /*GET relatório onibus por Empresa.*/ 
router.get('/relatorioEmpresa', function (req, res, next) {
  res.render('relatorioEmpresa', { title: 'Relatórios de Ônibus por Empresa' });
});

/* POST relatório onibus por Empresa.*/ 
router.post('/relatorioempresa', function(req, res) {
  var db = require("../db");

  var cnpjEmpresa = req.body.empresaCNPJ;

  var Empresas = db.Mongoose.model('empresacollection', db.UserSchema2, 'empresacollection');
  Empresas.find({cnpj: cnpjEmpresa}).lean().exec(
     function (e, docs) {
      docs.forEach(element => {
        if(element != null)
        {
          var Onibus = db.Mongoose.model('onibuscollection', db.OnibusSchema, 'onibuscollection');
          Onibus.find({cnpj: cnpjEmpresa}).lean().exec(
          function (e, docs) {
            res.render('retornoonibus', { "retornoonibus": docs });
          });
        }
      });
     });
});

/*GET relatório de rotas por dia.*/ 
router.get('/relatorioRotaDia', function (req, res, next) {
  res.render('relatorioRotaDia', { title: 'Relatórios de Rotas do Dia' });
});

/* POST relatório de rotas por dia.*/ 
router.post('/relatoriorotadia', function(req, res) {
  var db = require("../db");

  var diaRota = req.body.rotaDias;
  console.log(diaRota);
  
  var Rota = db.Mongoose.model('rotacollection', db.RotaSchema, 'rotacollection');
  Rota.find({dias: diaRota}).lean().exec(
    function (e, docs) {
      res.render('rotalist', { "rotalist": docs });
  });
});

/* GET relatorio Passagem. */
router.get('/relatorioPassagem', function(req, res, next) {
  res.render('RelatorioPassagem');
});

/* POST relatorio Passagem */
router.post('/relatoriopassagem', function(req, res) {
  var db = require("../db");

  var dataIni = req.body.DataIni;
  var dataFim = req.body.DataFim;
  

  var Passagem = db.Mongoose.model('passagemcollection', db.UserSchema1, 'passagemcollection');
  Passagem.find({  data: { $gte : dataIni, $lte: dataFim}}).lean().exec(
    function (e, docs) {
      res.render('relatorioPassagemList', { "relatorioPassagemList": docs });
  });
});

module.exports = router;
