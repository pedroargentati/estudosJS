import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
  const regex = /\[([^[]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const result = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
  return result.length !== 0 ? result : 'Não há links no arquivo.';
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "não há arquivo no diretório."));
}

async function pegaArquivo(caminhoArquivo) {
  const enconding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoArquivo, enconding);
    return extraiLinks(texto);
  } catch (error) {
    trataErro(error);
  }
}

export default pegaArquivo;
