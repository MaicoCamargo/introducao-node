var clienteModel = require('../model/cliente');


module.exports.index = function(request, response){

    clienteModel().all(function (erro, resultado) {
        response.render('home', {clientes: resultado});
    });
};

/**
 * cadastrar um cliente
 */
module.exports.insert = function(resquest,response){

    dados = resquest.body;

    clienteModel().save(dados,function () {
        response.redirect('/');
    });

};

/**
 * detalhes de um cliente
 * @param request
 * @param response
 */
module.exports.details = function (request,response) {

    clienteModel().find(request.params.id,function (erro,resultado) {
        if (resultado[0] && !erro){

            response.render('detalhe',{cliente: resultado[0]});
        } else{
            console.log('este cliente não existe ou ocorreu um erro ao carregar seus dados');
        }
    })
};