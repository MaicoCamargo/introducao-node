var clienteController = require('../controller/clienteController');
/*
    modulo de rotas que recebe um app para executar as rotas
 */
module.exports = function (app) {

    app.get('/', function (request, response) {
        clienteController.index(request,response);
    });

    app.get('/detalhes/:id', function (request, response) {
        clienteController.details(request,response);
    });

    app.post('/', function (request, response) {
        clienteController.insert(request,response);
    });
};
