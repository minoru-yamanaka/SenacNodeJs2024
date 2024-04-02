import chalk from "chalk";
import fs from "fs";

// console.log(chalk.green("Olá mundo"));
// npm install -> instala package.json

function tratarErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code,"Não é um arquivo"));
}

function pegarArquivo(caminhoDoArquivo){
    const encoding ="utf-8";
    fs.promises
    // encadeando funções do promises 
    .readFile(caminhoDoArquivo, encoding)
    .then((texto)=> console.log(chalk.green(texto)))
    .catch(tratarErro);
    /*
    fs.readFile(caminhoDoArquivo, encoding,(erro, texto)=>{
        if(erro){
            tratarErro(erro);
        }
        console.log(chalk.green(texto));         
    });
*/
}

pegarArquivo("./arquivos");