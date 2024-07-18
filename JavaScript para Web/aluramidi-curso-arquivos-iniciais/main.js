function tocaSom(idElementoAudio){
    // Executar som
    document.querySelector(idElementoAudio).play();
}

// Lista de classes
document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];;
    // Acessa a lista de teclas
    const instrumento = tecla.classList[1];
    // Monta a string com o id do som
    // Template String
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    };

}
