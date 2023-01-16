const data = require('./clientes');

function sort(dataSort, key, sortedField) {
	const result = dataSort.sort((a, b) => {
		if (a[key] < b[key]) {
			return -1;
		} else if (a[key] > b[key]) {
			return 1;
		}
		return 0;
	});

	sortedField = !sortedField ? sortedField = "asc" : sortedField;

	if (sortedField.toLowerCase() !== "asc") {
		result.reverse();
	}
	return result;
}

const sortedData = sort(data, "nome", "asc");
console.log(sortedData);