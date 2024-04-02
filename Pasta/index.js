import chalk from "chalk";
import fs from "fs";

// console.log(chalk.green("Olá mundo"));
// npm install -> instala package.json

function extrairLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    // for it
    const resultados = capturas.map( capturas => ({[capturas[1]]:[capturas[2]] }));
    return resultados;
}


function tratarErro(erro) {
    console.log(erro);
    throw new Error(chalk.bgMagenta(erro.code, "Não é um arquivo"));
}

//async
async function pegarArquivo(caminhoDoArquivo) {
    try {
        const encoding = "utf-8";
        // await 
        const texto = await fs.promises.readFile
        (caminhoDoArquivo, encoding);
        console.log(extrairLinks(texto));
    } catch(erro) {
        tratarErro(erro);
    }

    /* exemplo 02
    fs.promises
    // encadeando funções do promises 
    .readFile(caminhoDoArquivo, encoding)
    .then((texto)=> console.log(chalk.bgGreen(texto)))
    .catch(tratarErro);
    /*
    
    /* exemplo 01
    fs.readFile(caminhoDoArquivo, encoding,(erro, texto)=>{
        if(erro){
            tratarErro(erro);
        }
        console.log(chalk.green(texto));         
    });
    */
}

pegarArquivo("./arquivos/texto.md");

// pegarArquivo("./arquivos");

