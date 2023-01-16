function extraiLinks(arrLinks) {
  return arrLinks.map((objLink) => Object.values(objLink).join());
}

async function checaStatus(listaURLs) {
  const arrayStatus = await Promise.all(
    listaURLs.map(async (url) => {
      const response = await fetch(url);
      return response.status;
    })
  );
  return arrayStatus;
}

export default async function listaValidada(listaLinks) {
  const links = extraiLinks(listaLinks);
  const status = await checaStatus(links);

  return status;
}

// [gatinho salsicha](http://gatinhosalsicha.com.br/)
