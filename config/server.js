//imports
var express = require('express');
var rotas = require('../app/routers/router'); //variavel com as rotas da aplicacao que estao carregadas em outro modulo
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {

    //confis do projeto
    var server = express();
    server.set('view engine', 'ejs');//por padrao ele para funcionar é necessario uma pasta com nome views na raiz
    server.set('views', './app/views');//setar a pasta onde estão as views, por padrao o node pega uma pasta na raiz com nome views

    server.use(bodyParser.json());// suportar json dos bodies
    server.use(bodyParser.urlencoded({extends: true}));// suportar body codificado

    server.use(expressValidator());

    //executar para o projeto rodar
    rotas(server);

    server.listen('8000',function () {
        console.log('\n   server rodando com express...');
        console.log('   server rodando com conexão no banco mysql...\n');
    });
};