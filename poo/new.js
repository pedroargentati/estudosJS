function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos() = function() {
        return `${this.nome}, ${this.emial}`
    }
}

// const novoUser = new User("Pedro", "p@p.com")
// console.log(novoUser.exibirInfos());

function Admin(role) {
    User.call(this, 'Juliana, "j@j.com')
    this.role = role || 'Estudante'
}

Admin.prototype = Object.create(User.prototype);

const novoUser = new Admin("admin")

console.log(novoUser.exibirInfos());
