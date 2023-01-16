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

const keys = Object.keys(cliente);
console.log(keys);

if (!keys.includes('endereco')) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}