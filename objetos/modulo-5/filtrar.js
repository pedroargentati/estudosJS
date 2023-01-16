const data = require('./clientes');

function filtrar(dataSearch) {
    return dataSearch.filter((cliente) => cliente['endereco'].apartamento && !cliente['endereco'].hasOwnProperty('complemento'));
} 

console.log(filtrar(data));