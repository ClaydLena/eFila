const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fila'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conected to database!');
});

module.exports = connection;
