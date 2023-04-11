const inputTarefa = document.querySelector(".inputTarefa");
const btnTarefa = document.querySelector(".btnTarefa");
const tarefas = document.querySelector(".tarefas");
inputTarefa.focus()

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function criaBotao(li) {
  li.innerText += ''
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("tittle", "Apagar esta tarefa!");
  li.appendChild(botaoApagar)
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaTarefa(input) {
  const li = criaLi();
  li.innerHTML = input;
  criaBotao(li);
  tarefas.appendChild(li);
  li.innerHTML += " ";
  salvarTarefas()
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
  limpaInput();
});

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    inputTarefa.focus()
    salvarTarefas()
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = []

  for (const tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', tarefasJSON)

}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}
adicionaTarefasSalvas()