import chalk from "chalk";
import fs from "fs";
import pegaArquivo from "./index.js";

const caminho = process.argv;

function imprimeLista(resultados) {
    console.log(chalk.yellow('Lista de Links: '), resultados);
}

async function processaTexto(argumentos) {
  const caminho = argumentos[2];

  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(caminho);
    imprimeLista(resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho);

    arquivos.forEach(async (nomeArquivo) => {
        const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
        imprimeLista(lista);
    });
  }
}

processaTexto(caminho);
