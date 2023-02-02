export default class User {
    constructor(nome, email, nascimento, role, ativoInativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'Estudante';
        this.ativoInativo = ativoInativo;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

