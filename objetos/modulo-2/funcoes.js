const cliente = {
	nome: "Joao",
	idade: 24,
	email: "joao@firma.com",
	telefone: ["1155555550", "11933416333"],
	saldo: 200,
	efetuaPagamento: function (valorCompra) {
		if (valorCompra > this.saldo) {
			console.log('Saldo insuficiente!');
		} else {
			this.saldo -= valorCompra;
			console.log(`Pagamento realizado! Novo Saldo: ${this.saldo}.`);
		}
	}
};

cliente.efetuaPagamento(300);