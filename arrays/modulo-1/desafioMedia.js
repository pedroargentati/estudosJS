const listaNotas = [
    10,
    6.5,
    8,
    7.5
];

let totalNotas = 0;
let media = 0;

listaNotas?.forEach((nota) => {
    totalNotas += nota;
});

media = totalNotas / listaNotas.length;

console.log(`A média é: ${media}`);