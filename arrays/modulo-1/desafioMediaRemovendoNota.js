const listaNotas = [
    10,
    6,
    8,
    5,5,
    10
];

let totalNotas = 0;
let media = 0;

listaNotas.pop(); // removenodo o último elemento da lista.
listaNotas?.forEach((nota) => {
    totalNotas += nota;
});

media = totalNotas / listaNotas.length;

console.log(`A média é: ${media}`);
