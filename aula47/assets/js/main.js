let hora = 00;
let minutos = 00;
let segundos = 00;
let relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

function atualizarTimer() {
  relogio.innerHTML = `${hora}:${minutos}:${segundos}`;
}

const timer = setInterval(function () {
    segundos++;
    atualizarTimer()
  }, 1000);


iniciar.addEventListener("click", timer);
pausar.addEventListener("click", setTimeout(timer, 1000));
