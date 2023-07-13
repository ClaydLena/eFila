var express = require('express');
var router = express.Router();
const db = require('../db');
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization', 
  exposedHeaders: 'Custom-Header',
  accessControlAllowOrigin: false

}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tamanho', function (req, res, next) {

  db.query(
    `SELECT
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
        'depositoEsp': (result[0].tamanho ?? 0),
        'deposito': (result[1].tamanho ?? 0),
        'atendimentoEsp': (result[2].tamanho ?? 0),
        'atendimento': (result[3].tamanho ?? 0),
      }
      res.send(data);
    });
});

router.get('/gerarsenha', cors(corsOptions), function (req, res, next) {
  db.query(`
    SELECT
    CASE
      WHEN codigo_situacao = 0 THEN 'Igual a 0'
      ELSE 'Diferente de 0'
    END AS situacao,
    AVG(TIMESTAMPDIFF(SECOND, a.criada_em, a.actualizada_em)) AS valor_tempo_medio,
    COUNT(s.codigo_senha) AS tamanho_senha,
    AVG(TIMESTAMPDIFF(SECOND, a.criada_em, a.actualizada_em)) * COUNT(s.codigo_senha) AS tempoTotal
    FROM senha s
    LEFT JOIN atendimento a ON s.codigo_senha = a.codigo_senha
    WHERE s.atendida = 0
    GROUP BY codigo_servico, situacao`,
    
    function (err, result) {
      if (err) throw err;

      const data = {
        'depTempoEspera': (result[1].tempoTotal ?? 0) + (result[0].tempoTotal ?? 0 ),
        'depTtempoEsperaEsp': (result[0].tempoTotal ?? 0 ),
        'depTamanho': (result[1].tamanho ?? 0 ) + (result[0].tamanho ?? 0 ),
        'depTamanhoEsp': (result[0].tamanho ?? 0 ),

        'atTempoEspera': (result[3].tempoTotal ?? 0 )  + (result[2].tempoTotal ?? 0 ) ,
        'atTempoEsperaEsp': (result[2].tempoTotal ?? 0 ) ,
        'atTamanho': (result[3].tamanho ?? 0 ) + (result[2].tamanho ?? 0 ),
        'atTamanhoEsp':(result[2].tamanho ?? 0 )
      }
      
      res.send(data)
    });

});


router.post('/senha', cors(corsOptions), (req, res) => {
  const { codigo_servico, codigo_situacao, atendida, criada_em, actualizada_em } = req.body;

  console.log(codigo_servico, codigo_situacao, atendida, criada_em, actualizada_em, req)

  const query = 'INSERT INTO senha (codigo_servico, codigo_situacao, atendida, criada_em, actualizada_em) VALUES (?, ?, ?, ?, ?)';
  const values = [codigo_servico, codigo_situacao, atendida, criada_em, actualizada_em];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao adicionar a senha:', err);
      res.status(500).json({ error: 'Erro ao adicionar a senha' });
    } else {
      const senhaId = result.insertId;
      res.json({ id: senhaId });
    }
  });
})

router.get('/senhas',cors(corsOptions), function (req, res, next) {

  db.query(
    `SELECT *
    FROM Senha
    WHERE atendida = 0
    ORDER BY
      CASE codigo_situacao
        WHEN 1 THEN 1
        WHEN 2 THEN 2
        WHEN 3 THEN 3
        WHEN 4 THEN 4
        ELSE 5
      END,
      criada_em ASC;
    `,
    function (err, result) {
      if (err) throw err;
      res.send((result ?? 0));
    });
});

// SELECT *
// FROM Atendimento
// ORDER BY criada_em DESC
// LIMIT 3;

module.exports = router;
