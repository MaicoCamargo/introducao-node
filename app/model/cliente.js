var db = require('../../config/db');

module.exports = function () {

    this.all = function (retorno) {

        return db().query('select * from cliente',retorno);
    };

    this.find = function (id,retorno) {

        return db().query('select * from cliente where id = ?',id,retorno);
    };

    this.save = function (dados,retorno){
        return  db().query('insert into cliente set ? ',dados,retorno);
    };

    return this;
};