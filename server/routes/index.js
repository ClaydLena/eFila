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

// router.get('/tamanho', cors(corsOptions), function (req, res, next) {

//   db.query(`SELECT COUNT(codigo_senha) as tamanho FROM senha WHERE atendida = 0 GROUP BY codigo_servico`,
//     function (err, result) {
//       if (err) throw err;

//       const data = {
//         'deposito': result[0].tamanho,
//         'atendimento': result[1].tamanho,
//       }
//       res.send(data);
//     });
// });

router.get('/tamanho', cors(corsOptions), function (req, res, next) {

  db.query(`SELECT
          codigo_servico,
          COUNT(*) AS tamanho,
          CASE
            WHEN codigo_situacao = 0 THEN 'Igual a 0'
            ELSE 'Diferente de 0'
          END AS situacao
          FROM senha
          GROUP BY codigo_servico, situacao;`,

    function (err, result) {
      if (err) throw err;

      const data = {
        'depositoEsp': result[0].tamanho,
        'deposito': result[1].tamanho,
        'atendimentoEsp': result[2].tamanho,
        'atendimento': result[3].tamanho,
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

router.get('/atendimento/media', (req, res) => {
  const senhasNaoAtendidasQuery = 'SELECT * FROM senha WHERE atendida = 0';
  db.query(senhasNaoAtendidasQuery, (err, senhasNaoAtendidas) => {
    if (err) {
      console.error('Erro ao obter senhas não atendidas:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    const totalSenhasNaoAtendidas = senhasNaoAtendidas.length;

    if (totalSenhasNaoAtendidas === 0) {
      return res.json({ media: 0 });
    }

    const atendimentosQuery = 'SELECT * FROM atendimento';
    db.query(atendimentosQuery, (err, atendimentos) => {
      if (err) {
        console.error('Erro ao obter atendimentos:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }

      const tempoTotalAtendimento = atendimentos.reduce((total, atendimento) => {
        if (senhasNaoAtendidas.some((senha) => senha.codigo_senha === atendimento.codigo_senha)) {
          const tempoAtendimento = calcularTempoAtendimento(atendimento.criada_em, atendimento.actualizada_em);
          return total + tempoAtendimento;
        }
        return total;
      }, 0);

      const mediaTempoAtendimento = tempoTotalAtendimento / totalSenhasNaoAtendidas;
      const mdH = converterMTH(mediaTempoAtendimento)

      res.json({ media: mdH });
    });
  });
});

// Função para calcular o tempo de atendimento em milissegundos
function calcularTempoAtendimento(criadaEm, actualizadaEm) {
  const criada = new Date(criadaEm);
  const actualizada = new Date(actualizadaEm);
  return actualizada - criada;
}

//converter em formato de hras
function converterMTH(milissegundos) {
  const segundos = Math.floor((milissegundos / 1000) % 60);
  const minutos = Math.floor((milissegundos / (1000 * 60)) % 60);
  const horas = Math.floor(milissegundos / (1000 * 60 * 60));

  const formatoHora = `${horas.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  return formatoHora;
}




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