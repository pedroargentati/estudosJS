const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];

function searchAluno(aluno) {
    const [alunos, medias] = listaAlunosMedias;

    const alunoEncontrado = alunos.includes(aluno);
    const indexAluno = medias[listaAlunosMedias[0].indexOf(aluno)];

    if (alunoEncontrado) {
        console.log(`A média do aluno ${aluno} é ${indexAluno}`);
    } else {
        console.log(`Aluno ${aluno} não foi encontrado na lista.`);
    }
}

searchAluno('Ana')