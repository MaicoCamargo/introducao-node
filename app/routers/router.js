var clienteModel = require('../model/cliente');

/*
    modulo de rotas que recebe um app para executar as rotas
 */
module.exports = function (app) {

    app.get('/', function (request, response) {
        response.render('home',{clientes: clienteModel().all()});
    });

    app.get('/contato', function (request, response) {
        response.render('contato');
    });
};
