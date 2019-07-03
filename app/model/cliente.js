var mysql = require('mysql');

var con = mysql.createConnection({
    host:'127.0.0.1',
    user:'admin',
    password:'admin',
    database:'node_db'
});

module.exports = function () {

    this.all = function () {
        con.query('select * from cliente',function (erro, resultado) {
            console.log(resultado);
        })
    };

    return this;
};