var express = require('express');

var app = express();
app.set('view engine','ejs');//por padrao ele para funcionar é necessario uma pasta com nome views na raiz

app.get('/', function (request, response) {
   response.render('site/home');
});


app.listen('8000',function () {
   console.log('server rodando com express');
});