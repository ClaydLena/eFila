var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/usuarios', function (req, res) {
  db.query('SELECT * FROM users', function (err, result) {
    if (err) throw err;

    res.send(result);
  });
  const a = db.query('SELECT * FROM users')
  console.log(a)
});

router.get('/usuarios', function (req, res) {
  db.query('SELECT * FROM users', function (err, result) {
    if (err) throw err;


    res.send(result);
  });
});

router.post('/login', function (req, res) {
  const { username, password } = req.body;

  if (username === 'usuario' && password === 'senha') {
    
    res.redirect('/');
  } else {
    
    res.redirect('/login');
  }
});

module.exports = router;
