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
        'depositoEsp': result[0].tamanho,
        'deposito': result[1].tamanho,
        'atendimentoEsp': result[2].tamanho,
        'atendimento': result[3].tamanho,
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

// router.get('/atendimento/media', (req, res) => {
//   const senhasNaoAtendidasQuery = 'SELECT * FROM senha WHERE atendida = 0';
//   db.query(senhasNaoAtendidasQuery, (err, senhasNaoAtendidas) => {
//     if (err) {
//       console.error('Erro ao obter senhas não atendidas:', err);
//       return res.status(500).json({ error: 'Erro interno do servidor' });
//     }

//     const totalSenhasNaoAtendidas = senhasNaoAtendidas.length;

//     if (totalSenhasNaoAtendidas === 0) {
//       return res.json({ media: 0 });
//     }

//     const atendimentosQuery = 'SELECT * FROM atendimento';
//     db.query(atendimentosQuery, (err, atendimentos) => {
//       if (err) {
//         console.error('Erro ao obter atendimentos:', err);
//         return res.status(500).json({ error: 'Erro interno do servidor' });
//       }

//       const tempoTotalAtendimento = atendimentos.reduce((total, atendimento) => {
//         if (senhasNaoAtendidas.some((senha) => senha.codigo_senha === atendimento.codigo_senha)) {
//           const tempoAtendimento = calcularTempoAtendimento(atendimento.criada_em, atendimento.actualizada_em);
//           return total + tempoAtendimento;
//         }
//         return total;
//       }, 0);

//       const mediaTempoAtendimento = tempoTotalAtendimento / totalSenhasNaoAtendidas;
//       const mdH = converterMTH(mediaTempoAtendimento)

//       res.json({ media: mdH });
//     });
//   });
// });

// // Função para calcular o tempo de atendimento em milissegundos
// function calcularTempoAtendimento(criadaEm, actualizadaEm) {
//   const criada = new Date(criadaEm);
//   const actualizada = new Date(actualizadaEm);
//   return actualizada - criada;
// }

//converter em formato de hras
// function converterTempo(segundos) {
//   const horas = Math.floor(segundos / 3600);
//   const minutos = Math.floor((segundos % 3600) / 60);
//   const segundosRestantes = segundos % 60;

//   const formatoHora = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;

//   return formatoHora;
// }




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