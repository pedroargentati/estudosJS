import chalk from "chalk";
import fs from "fs";
import pegaArquivo from "./index.js";

const caminho = process.argv;

function imprimeLista(resultados, identificador = '') {
    console.log(
        chalk.yellow('Lista de Links: '),
        chalk.black.bgGreen(identificador),
        resultados);
}

async function processaTexto(argumentos) {
  const caminho = argumentos[2];

  try {
    fs.lstatSync(caminho);
  } catch (error) {
    if (error.code === 'ENOENT') {
        console.log(chalk.red('Arquivo ou diretório não existe.'));
        return;
    }
  }

  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(caminho);
    imprimeLista(resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho);

    arquivos.forEach(async (nomeArquivo) => {
        const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
        imprimeLista(lista, nomeArquivo);
    });
  }
}

processaTexto(caminho);
