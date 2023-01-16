import chalk from "chalk";

function extraiLinks(arrLinks) {
  return arrLinks.map((objLink) => Object.values(objLink).join());
}

async function checaStatus(listaURLs) {
  const arrayStatus = await Promise.all(
    listaURLs.map(async (url) => {
      try {
        const response = await fetch(url);
        return response.status;
      } catch (error) {
        return manejaErros(error);
      }
    })
  );
  return arrayStatus;
}

function manejaErros(erro) {
  if (erro.cause.code === 'ENOTFOUND') {
	return 'Erro: A página não foi encontrada.';
  } else {
	return 'Erro inesperado.'
  }
}

export default async function listaValidada(listaLinks) {
  const links = extraiLinks(listaLinks);
  const status = await checaStatus(links);

  return listaLinks.map((obj, idx) => ({
    ...obj,
    status: status[idx],
  }));
}
