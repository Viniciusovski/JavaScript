function tocaSom(idElementoAudio){
    // Executar som
    document.querySelector(idElementoAudio).play();
}

// Lista de classes
document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];;
    // Acessa a lista de teclas
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    // Monta a string com o id do som
    // Template String
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    contador = contador + 1;

    console.log(contador);
}
