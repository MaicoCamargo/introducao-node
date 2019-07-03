var db = require('../../config/db');

module.exports = function () {

    this.all = function (retorno) {

        return db().query('select * from cliente',retorno);
    };

    return this;
};