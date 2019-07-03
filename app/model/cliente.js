var db = require('../../config/db');

module.exports = function () {

    this.all = function (retorno) {

        return db().query('select * from cliente',retorno);
    };

    this.find = function (id,retorno) {
        console.log(id);
        console.log('fazendo consulta');
        return db().query('select * from cliente where id = ?',id,retorno);
    };

    return this;
};