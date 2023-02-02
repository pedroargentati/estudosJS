const user = {
    nome: "Pedro",
    email: "p@p.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(`Nome: ${this.nome}\nEmail: ${this.email}`);
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    criarcurso() {
        console.log(`Curso criado.`);
    }
}
Object.setPrototypeOf(admin, user)
admin.criarcurso()
admin.exibirInfos()