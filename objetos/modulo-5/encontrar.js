const data = require('./clientes');

function search(dataSearch, key, value) {
	return dataSearch.find((item) => item[key].includes(value));
}

console.log(search(data, "nome", "Olva"));
