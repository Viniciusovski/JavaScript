//  encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAddTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tarefas = []

btnAdicionarTarefa.addEventListener('click', () => {
    // mostrar ou ocultar o  formulario
    formAddTarefa.classList.toggle('hidden')
})

// Evento de submissão do formulário
formAddTarefa.addEventListener('submit', (event) => {
    // Prevenir que o comportamento da página seja padrão
    event.preventDefault();
    // Objeto tarefa
    const tarefa = {
        descricao: textArea.value
    }
    // Adicionar objeto tarefa ao array
    tarefas.push(tarefa)

    // Guarda a lista de tarefas no localStorage
    localStorage.setItem('tarefas', tarefas)
})