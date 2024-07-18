function tocaSomPom(){
    // Executar som
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    // Executar som
    document.querySelector('#som_tecla_clap').play();
}
// É preciso tirar os parenteses para fazer a atribuição no onclick
document.querySelector('.tecla_pom').onclick = tocaSomPom;

// Lista de classes
document.querySelectorAll('.tecla');