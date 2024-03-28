## Node.js Introdução 

O que é Node.js?

Node.js é um ambiente de servidor de código aberto
Node.js é grátis
Node.js roda em várias plataformas (Windows, Linux, Unix, Mac OS X, etc.)
Node.js usa JavaScript no servidor
Por que Node.js?
Node.js usa programação assíncrona!

Uma tarefa comum para um servidor Web pode ser abrir um arquivo no servidor e retornar o conteúdo para o cliente.

Aqui está como PHP ou ASP lida com uma solicitação de arquivo:

Envia a tarefa para o sistema de arquivos do computador.
Aguarda enquanto o sistema de arquivos é aberto e lê o arquivo.
Retorna o conteúdo para o cliente.
Pronto para lidar com o próximo pedir.
Veja como Node.js lida com uma solicitação de arquivo:

Envia a tarefa para o sistema de arquivos do computador.
Pronto para lidar com a próxima solicitação.
Quando o sistema de arquivos tem Aberto e lido o arquivo, o servidor retorna o conteúdo para o cliente.
Node.js elimina a espera e simplesmente continua com a próxima solicitação.

Node.js executa programação assíncrona, sem bloqueio e de thread único, que é muito eficiente em termos de memória.

O que Node.js pode fazer?
Node.js pode gerar conteúdo de página dinâmico
Node.js pode criar, abrir, ler, gravar, excluir e fechar arquivos no servidor
Node.js pode coletar dados de formulário
Node.js pode adicionar, excluir, modificar dados em seu banco de dados
O que é um arquivo Node.js?
Node.js arquivos contêm tarefas que serão executadas em determinados eventos
Um evento típico é alguém tentando acessar uma porta no servidor
Node.js arquivos devem ser iniciados no servidor antes de ter qualquer efeito
Node.js arquivos têm extensão ".js"

- link úteis
https://www.w3schools.com/nodejs/nodejs_get_started.asp

## Node.js Comece agora 

Baixar Node.js
O site oficial do Node.js tem instruções de instalação para Node.js: https://nodejs.org

Primeiros passos
Depois de ter baixado e instalado Node.js no seu computador, vamos tentar exibir "Hello World" em um navegador da web.

Crie um arquivo Node.js chamado "myfirst.js" e adicione o seguinte código:

myfirst.js

```
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

Salve o arquivo em seu computador: 
```
C:\Users\Your Name\myfirst.js
```

O código diz ao computador para escrever "Hello World!" se alguém (por exemplo, um navegador da web) tentar para acessar o computador na porta 8080.

Por enquanto, você não precisa entenda o código. Isso será explicado mais adiante.

Interface de linha de comando
Node.js arquivos devem ser iniciados no programa "Command Line Interface" do seu computador.

Como abrir a interface de linha de comando no computador depende do sistema operacional. Para usuários do Windows, pressione o botão Iniciar e procure "Comando Prompt", ou simplesmente escreva "cmd" no campo de pesquisa.

Navegue até a pasta que contém o arquivo "myfirst.js", o Interface de linha de comando janela deve ser algo como isto:

C:\Users\Your Name>_
Iniciar o arquivo Node.js
O arquivo que você acabou de criar deve ser iniciado por Node.js antes de qualquer ação pode ocorrer.

Inicie sua interface de linha de comando, escreva e pressione enter:node myfirst.js

Inicie o "myfirst.js":

```
C:\Users\Your Name>node myfirst.js
```
Agora, seu computador funciona como um servidor!

Se alguém tentar acessar seu computador na porta 8080, receberá um "Olá Mundo!" mensagem em troca!

Inicie seu navegador de internet e digite o endereço: http://localhost:8080

- link úteis
https://www.w3schools.com/nodejs/nodejs_get_started.asp

## Node.js Módulos

O que é um módulo em Node.js?
Considere os módulos iguais às bibliotecas JavaScript.

Um conjunto de funções que você deseja incluir em seu aplicativo.

Módulos Integrados
Node.js tem um conjunto de módulos embutidos que você pode usar sem mais instalação.

Veja nossa referência de módulos integrados para um lista completa de módulos.

Incluir módulos
Para incluir um módulo, use a função com o nome do módulo:require()

var http = require('http');
Agora seu aplicativo tem acesso ao módulo HTTP e é capaz de criar um servidor:

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
Crie seus próprios módulos
Você pode criar seus próprios módulos e incluí-los facilmente em seus aplicativos.

O exemplo a seguir cria um módulo que retorna um objeto de data e hora:

Exemplo 

Obtenha seu próprio servidor Node.js
Crie um módulo que retorne a data e hora atuais:

```
exports.myDateTime = function () {
  return Date();
};
````

Use a palavra-chave para disponibilizar propriedades e métodos fora do arquivo de módulo.exports

Salve o código acima em um arquivo chamado "myfirstmodule.js"

Inclua seu próprio módulo
Agora você pode incluir e usar o módulo em qualquer um dos seus arquivos Node.js.

Exemplo
Use o módulo "myfirstmodule" em um arquivo Node.js:

```
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
```
Observe que usamos para localizar o módulo, isso significa que o módulo está localizado na mesma pasta que o arquivo Node.js../

Salve o código acima em um arquivo chamado "demo_module.js" e inicie o arquivo:

Inicie demo_module.js:

C:\Users\Your Name>node demo_module.js
Se você tiver seguido as mesmas etapas em seu computador, verá o mesmo resultado do exemplo: http://localhost:8080



