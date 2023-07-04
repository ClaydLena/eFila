var express = require('express');
var router = express.Router();
const db = require('../db');
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tamanho', cors(corsOptions), function (req, res, next) {

  db.query(`SELECT COUNT(codigo_senha) as tamanho FROM senha WHERE atendida = 0 GROUP BY codigo_servico`,
    function (err, result) {
      if (err) throw err;

      const data = {
        'deposito': result[0].tamanho,
        'atendimento': result[1].tamanho,
      }
      res.send(data);
    });
});

// router.get('/tamanhoEsp', cors(corsOptions), function (req, res, next) {
//   db.query(`SELECT COUNT(codigo_senha) as tamanho FROM senha WHERE atendida = 0 and codigo_need !=5 GROUP by codigo_servico`,
//     function (err, result) {
//       if (err) throw err;

//       const data = {
//         'depositoEsp': result[0].tamanho,
//         'atendimentoEsp': result[1].tamanho
//       }
//       res.send(data);
//     });
// });

router.get('/needs', function (req, res, next) {
  db.query('SELECT * FROM needs', function (err, result) {
    if (err) throw err;

    res.send(result);
  });
});

router.get('/caixas', function (req, res, next) {
  db.query('SELECT * FROM caixas', function (err, result) {
    if (err) throw err;

    res.send(result);
  });
});

router.post('/gerarsenha', cors(corsOptions), function (req, res, next) {
  const { service, need } = req.body

  if (need == 5)
    db.query('SELECT (SELECT AVG(TIME_TO_SEC(TIMEDIFF(updated, created)) / 60) FROM senha WHERE atendida = 1) * (SELECT COUNT(codigo_senha) FROM senha WHERE atendida = 1) as tempo, (SELECT COUNT(codigo_senha) FROM senha WHERE atendida = 1)as tamanho',
      function (err, result) {
        if (err) throw err;
        res.send(result)

      });
  else
    db.query('SELECT (SELECT AVG(TIME_TO_SEC(TIMEDIFF(updated, created)) / 60) FROM senha WHERE atendida = 1) * (SELECT COUNT(codigo_senha) FROM senha WHERE atendida = 1) as tempo, (SELECT COUNT(codigo_senha) FROM senha WHERE atendida = 1)as tamanho',
      function (err, result) {
        if (err) throw err;
        res.send(result)

      });
});

router.get('/gerarsenha', cors(corsOptions), function (req, res, next) {
  const data = {}
  const { service, need } = req.body

  db.query('SELECT (SELECT AVG(TIME_TO_SEC(TIMEDIFF(updated, created)) / 60) FROM senha WHERE atendida = 1) * (SELECT COUNT(codigo_senha) FROM senha WHERE atendida = 1) as tempo, (SELECT COUNT(codigo_senha) FROM senha WHERE atendida = 1)as tamanho',
    function (err, result) {
      if (err) throw err;
      res.send(result)

    });

  // const today = new Date();
  // data.tamanho = a;
  // data.tempo = b;
  // data.atendimento = data?.tempo + today;

  // res.send(data);
});



router.post('/senha', cors(corsOptions), function (req, res, next) {
  const { service, need } = req.body

  db.query(`Insert into senha ()`,
    function (err, result) {
      if (err) throw err;

      const data = {
        'deposito': result[0].tamanho,
        'atendimento': result[1].tamanho
      }
      res.send(data);
    });
});

module.exports = router;