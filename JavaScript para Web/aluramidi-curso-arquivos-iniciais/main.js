function tocaSom(idElementoAudio){
    // Executar som
    document.querySelector(idElementoAudio).play();
}

// Lista de classes
document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;

    contador = contador + 1;

    console.log(contador);
}
