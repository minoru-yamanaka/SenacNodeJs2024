# Aula  02 04 24

**npm init :**

 `npm i` ou `npm install` 	

tem de dar um npm init para instalar o package.json

---

**.gitignore**

    node_modules 

tem que criar um .gitignore e add a pasta node_modules

---

Em programação, uma operação assíncrona é aquela que não bloqueia o fluxo de execução principal do programa enquanto está sendo realizada. Em vez disso, ela permite que outras operações continuem enquanto a operação assíncrona está em andamento.

Operações assíncronas são comuns em situações em que uma operação pode levar algum tempo para ser concluída, como acesso a um arquivo, chamadas de rede, consultas a bancos de dados ou qualquer tipo de operação de entrada/saída (I/O).

Em JavaScript, as operações assíncronas são tratadas principalmente usando callbacks, promessas ou funções assíncronas (`async/await`).

- **Callbacks**: Uma maneira comum de lidar com operações assíncronas em JavaScript é passar uma função de callback que será executada quando a operação for concluída.

- **Promessas**: As promessas são um mecanismo para representar valores que podem estar disponíveis agora, no futuro ou nunca. Elas fornecem uma maneira mais limpa de lidar com o código assíncrono, permitindo encadear operações usando `.then()` e `.catch()`.

- **Funções assíncronas (`async/await`)**: A sintaxe `async/await` é uma maneira mais moderna de lidar com operações assíncronas em JavaScript, introduzida no ECMAScript 2017 (ES8). Permite que você escreva código assíncrono de forma mais síncrona e legível, sem o aninhamento excessivo de callbacks ou a complexidade de encadeamento de promessas.

Em resumo, operações assíncronas em programação são aquelas que permitem que o programa execute outras tarefas enquanto aguarda a conclusão de uma operação específica que pode levar algum tempo. Isso é fundamental para criar aplicativos responsivos e eficientes, especialmente em ambientes de rede ou E/S intensivos.

---

A palavra-chave `async` em JavaScript é usada para definir funções assíncronas. Quando uma função é definida com `async`, ela sempre retorna uma promessa. Essa promessa é resolvida com o valor retornado pela função assíncrona ou rejeitada com qualquer erro lançado dentro da função assíncrona.

Por exemplo:

```javascript
async function minhaFuncao() {
    return 'Olá mundo!';
}

minhaFuncao().then(resultado => {
    console.log(resultado); // Saída: Olá mundo!
});
```

No exemplo acima, `minhaFuncao` é definida como uma função assíncrona usando a palavra-chave `async`. Mesmo que não haja uma palavra-chave `return` explícita na função, ela retorna uma promessa que é resolvida com o valor `'Olá mundo!'`.

Ao chamar `minhaFuncao()`, ela retorna uma promessa. Você pode então encadear um método `.then()` para lidar com o resultado quando a promessa for resolvida.

A palavra-chave `async` permite que você use a palavra-chave `await` dentro da função assíncrona para aguardar a conclusão de outras operações assíncronas. Isso torna mais fácil escrever código assíncrono de forma síncrona e mais legível, como mencionado anteriormente.

---

`await` é uma palavra-chave em JavaScript usada em funções assíncronas (`async`), principalmente em conjunto com `Promise`s, para aguardar a conclusão de uma operação assíncrona antes de continuar a execução do código.

Quando você usa `await` antes de uma expressão de promessa, a execução da função assíncrona é suspensa até que a promessa seja resolvida ou rejeitada. Isso permite que o código assíncrono pareça síncrono e seja mais fácil de ler e entender.

Por exemplo, considere a seguinte função assíncrona que faz uma solicitação HTTP usando `fetch`:

```javascript
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}
```

Neste exemplo, `await fetch('https://api.example.com/data')` aguarda a conclusão da solicitação HTTP antes de prosseguir para a próxima linha. Da mesma forma, `await response.json()` aguarda a conversão da resposta HTTP em JSON.

O uso de `await` simplifica o código assíncrono, evitando a necessidade de usar callbacks ou promessas encadeadas (callbacks hell), tornando o código mais legível e fácil de manter.

---

Regex, ou expressões regulares, são padrões de texto utilizados para fazer correspondência e busca em strings de texto. Elas são uma ferramenta poderosa e flexível encontrada em muitas linguagens de programação e em várias ferramentas de edição de texto e processamento de dados.

As expressões regulares são compostas por caracteres literais (que correspondem a si mesmos) e metacaracteres (que têm significados especiais). Aqui estão alguns dos metacaracteres mais comuns:

- `.`: Corresponde a qualquer caractere, exceto uma nova linha.
- `^`: Corresponde ao início de uma string.
- `$`: Corresponde ao final de uma string.
- `*`: Corresponde a zero ou mais ocorrências do caractere anterior.
- `+`: Corresponde a uma ou mais ocorrências do caractere anterior.
- `?`: Corresponde a zero ou uma ocorrência do caractere anterior.
- `[]`: Define uma classe de caracteres. Por exemplo, `[a-z]` corresponde a qualquer letra minúscula.
- `()`: Agrupa padrões para aplicar quantificadores ou alternativas.
- `|`: Representa uma alternativa. Por exemplo, `a|b` corresponde a "a" ou "b".

Por exemplo, a expressão regular `/a*b/` corresponde a strings que começam com zero ou mais "a"s seguidos de um "b", como "b", "ab", "aab", etc.

As expressões regulares são frequentemente usadas em:

1. Validação de entrada de usuário em formulários web.
2. Extração de informações de texto, como endereços de e-mail, URLs, números de telefone, etc.
3. Substituição de texto em documentos.
4. Busca de padrões em grandes conjuntos de dados.
5. Análise de arquivos de log.
6. E muito mais.

Embora poderosas, as expressões regulares podem ser difíceis de ler e escrever, especialmente para padrões complexos. No entanto, uma vez que você entenda os conceitos básicos, elas se tornam uma ferramenta valiosa para lidar com manipulação de texto em programação.

https://regex101.com/

---

código :

```

import chalk from "chalk";
import fs from "fs";

function extrairLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({ texto: captura[1], url: captura[2] }));
    return resultados;
}

function tratarErro(erro) {
    console.log(chalk.bgMagenta(erro.code, "Não é um arquivo"));
    throw new Error(erro);
}

async function pegarArquivo(caminhoDoArquivo) {
    try {
        const encoding = "utf-8";
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.bgMagenta(JSON.stringify(extrairLinks(texto), null, 2)));
    } catch (erro) {
        tratarErro(erro);
    }
}

pegarArquivo("./arquivos/texto.md");

```

saída :

```
[
  {
    "texto": "W3 Schools",
    "url": "https://www.w3schools.com"
  },
  {
    "texto": "MDN Web Docs",
    "url": "https://developer.mozilla.org"
  },
  {
    "texto": "The Modern JavaScript Tutorial",
    "url": "https://javascript.info/"
  }
]
```