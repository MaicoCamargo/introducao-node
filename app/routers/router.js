/*
    modulo de rotas que recebe um app para executar as rotas
 */
module.exports = function (app) {

    app.get('/', function (request, response) {
        response.render('home');
    });

    app.get('/contato', function (request, response) {
        response.render('contato');
    });
};
