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

cliente?.enderecos?.push(
	{
		rua: "Av Bandeirantes",
		numero: 404,
		apto: false
	}
);

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apto === true);

console.log(cliente);

console.log('Cliente que tem apartamento: ', listaApenasApartamentos);