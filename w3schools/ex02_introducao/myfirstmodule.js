var http = require('http');
var dt = require('./demo_module'); //<-- puxa a function add o nome do arquivo

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080); // <--- A instrução listen() está correta, não há nada de errado com ela
