import User from './User.js';

class Admin extends User {
    constructor(nome, email, nacimento, role = 'Admin', ativoInativo = true) {
        super(nome, email, nacimento, role, ativoInativo)
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso de ${nomeCurso} criado com ${qtdVagas} vagas.`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-02');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('JS', 20));