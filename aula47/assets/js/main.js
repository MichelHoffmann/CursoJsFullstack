let hora = 00;
let minutos = 00;
let segundos = 00;
let relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

function atualizarTimer() {
  relogio.innerHTML = `${hora.toFixed(2)}:${minutos.toFixed(
    2
  )}:${segundos.toFixed(2)}`;
}

const timer = setInterval(function () {
    segundos++;
    console.log(segundos);
  }, 1000);

function pausarTimer() {
  setTimeout(iniciarF, 1000);
}

iniciar.addEventListener("click", iniciarTimer());
pausar.addEventListener("click", pausarTimer());
