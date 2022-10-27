const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Miguel Herrera',
    password: 'CarpeDiem4219yz?',
    database: "ejercicioExpressSQL"
});

db.connect();

module.exports = db;