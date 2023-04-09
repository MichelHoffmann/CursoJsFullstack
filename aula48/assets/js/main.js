const inputTarefa = document.querySelector(".inputTarefa");
const btnTarefa = document.querySelector(".btnTarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function criaBotao() {
  const btn = document.createElement("button");
  btn.innerHTML = "Remover";
  btn.setAttribute("class", "apagar");
  btn.setAttribute("tittle", "Apagar esta tarefa!");
  return btn;
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaTarefa(input) {
  const li = criaLi();
  li.innerHTML = input;
  const btn = criaBotao();
  tarefas.appendChild(li);
  li.innerHTML += " ";
  li.appendChild(btn);
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
  }
});
