var clienteModel = require('../model/cliente');

/*
    modulo de rotas que recebe um app para executar as rotas
 */
module.exports = function (app) {

    app.get('/', function (request, response) {

        /*
            no metodo all estamos fazendo um callback, mandando uma função por parametro
         */
        clienteModel().all(function (erro, resultado) {
            response.render('home', {clientes: resultado});
        })
    });

    app.get('/contato', function (request, response) {
        response.render('contato');
    });
};
