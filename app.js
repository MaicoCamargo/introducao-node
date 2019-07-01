var express = require('express');

var app = express();

app.get('/', function (request, response) {
   response.send(`<p>Ola mundo usando nodejs e Express</p>`);
});


app.listen('8000',function () {
   console.log('server rodando com express');
});