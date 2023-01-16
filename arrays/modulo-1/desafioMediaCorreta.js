const listaNotas = [
    10,
    6,
    8
];

let totalNotas = 0;
let media = 0;

listaNotas.push(7); // nota em que o professor esqueceu.
listaNotas?.forEach((nota) => {
    totalNotas += nota;
});

media = totalNotas / listaNotas.length;

console.log(`A média é: ${media}`);
