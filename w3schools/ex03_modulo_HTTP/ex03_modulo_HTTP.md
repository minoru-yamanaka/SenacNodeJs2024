# Módulo HTTP Node.js

Módulo HTTP Node.js
O módulo HTTP integrado
Node.js tem um módulo embutido chamado HTTP, que permite que Node.js transfira dados sobre o protocolo HTTP (Hyper Text Transfer Protocol).

Para incluir o módulo HTTP, use o método:require()

var http = require('http');
Node.js como um servidor Web
O módulo HTTP pode criar um servidor HTTP que escuta portas do servidor e dá uma resposta de volta para o cliente.

Use o método para criar um Servidor HTTP:createServer()

ExemploObtenha seu próprio servidor Node.js
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
A função passada para o método, será executada quando alguém tentar acessar o computador na porta 8080.http.createServer()

Salve o código acima em um arquivo chamado "demo_http.js" e inicie O arquivo:

Inicie demo_http.js:

C:\Users\Your Name>node demo_http.js
Se você tiver seguido as mesmas etapas em seu computador, verá o mesmo resultado do exemplo: http://localhost:8080

ANÚNCIO

ANÚNCIO

ANÚNCIO

Adicionar um cabeçalho HTTP
Se a resposta do servidor HTTP deve ser exibida como HTML, você deve incluir um cabeçalho HTTP com o tipo de conteúdo correto:

Exemplo
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
O primeiro argumento do método é o código de status, 200 significa Isso tudo está OK, o segundo argumento é um objeto que contém os cabeçalhos de resposta.res.writeHead()

Ler a sequência de caracteres de consulta
A função passada para o tem um argumento que representa a solicitação do cliente, como um objeto (http. Objeto IncomingMessage).http.createServer()req

Este objeto tem uma propriedade chamada "url" que contém o Parte da URL que vem após o nome de domínio:

demo_http_url.js

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
Salve o código acima em um arquivo chamado "demo_http_url.js" e Inicie o arquivo:

Inicie demo_http_url.js:

C:\Users\Your Name>node demo_http_url.js
Se você tiver seguido as mesmas etapas em seu computador, você verá dois resultados diferentes ao abrir esses dois endereços:

http://localhost:8080/summer

Produzirá este resultado:

/summer
http://localhost:8080/winter

Produzirá este resultado:

/winter
Dividir a cadeia de caracteres de consulta
Há módulos internos para dividir facilmente a cadeia de caracteres de consulta em legível partes, como o módulo URL.

Exemplo
Divida a cadeia de caracteres de consulta em partes legíveis:

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
Salve o código acima em um arquivo chamado "demo_querystring.js" e Inicie o arquivo:

Inicie demo_querystring.js:

C:\Users\Your Name>node demo_querystring.js
O endereço:

http://localhost:8080/?year=2017&month=July

Produzirá este resultado:

- link úteis: https://www.w3schools.com/nodejs/nodejs_http.asp 