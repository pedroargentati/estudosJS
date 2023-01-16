function extraiLinks(arrLinks) {
   return arrLinks.map((objLink) => Object.values(objLink).join())
}

export default function listaValidada(listaLinks) {
  return extraiLinks(listaLinks);
}
