const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
    console.log(i + '° ' + numeros[i]);
}

console.log('');
console.log('');

numeros?.forEach((numero, index) => {
    console.log(index + '° ' + numero);
})

console.log('');
console.log('');

let k = 0;
for (let numero of numeros) {
    console.log(k + '° ' + numero);
    k++;
}