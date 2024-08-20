//  encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAddTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const ulTarefas = document.querySelector('.app__section-task-list')

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = ` 
       <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
        `
    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descricao
    paragrafo.classList.add('app__section-task-list-item-description')

    const butao = document.createElement('button')
    butao.classList.add('app__button-edit')

    butao.onclick = () => {
        const novaDescricao = prompt("Qual é o novo nome da tarefa?")
        paragrafo.textContent = novaDescricao
    }

    const imagemBotao = document.createElement('img')
    imagemBotao.setAttribute('src', '/imagens/edit.png')

    imagemBotao.append(imagemBotao)

    li.append(svg)
    li.append(paragrafo)
    li.append(butao)    
    
    return li
}

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
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)

    // Guarda a lista de tarefas no localStorage
    // JSON.stringfy converte um objeto em uma string
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    // Limpar e esconder o textArea
    textArea.value = ''
    formAddTarefa.classList.add('hidden')
})

tarefas.forEach(tarefa =>{
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
})