function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla =  listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => tocaSom(idAudio);

    tecla.onkeydown = (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}
