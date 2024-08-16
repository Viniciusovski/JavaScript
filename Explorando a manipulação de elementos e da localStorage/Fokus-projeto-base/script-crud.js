//  encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAddTarefa = document.querySelector('.app__form-add-task')

btnAdicionarTarefa.addEventListener('click', () => {
    // mostrar ou ocultar o formulario
    formAddTarefa.classList.toggle('hidden')
})