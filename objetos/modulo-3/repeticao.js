const cliente = {
	nome: "Joao",
	idade: 24,
	email: "joao@firma.com",
	telefone: ["1155555550", "11933416333"],
};

cliente.enderecos = [
	{
		rua: "R. Joseph Climber",
		numero: 1337,
		apto: true,
		complemento: "apto 934"
	}
];

for (let key in cliente) {
	let type = typeof cliente[key];
	if (type !== "object" && type !== "function") {
		console.log(`A chave ${key} tem o valor ${cliente[key]}`);
	}
}
