function tocaSomPom(){
    // Executar som
    document.querySelector('#som_tecla_pom').play();
}

// Lista de classes
document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);
}
