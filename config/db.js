var mysql = require('mysql');

//conexao com banco de dados
var conexaoDB = function () {

    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'admin',
        password: 'admin',
        database: 'node_db'
    });
};

module.exports = conexaoDB;