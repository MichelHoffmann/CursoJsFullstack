// function criaHoraDosSegudos(segundos) {
//   const data = new Date(segundos * 1000);
//   return data.toLocaleTimeString("pt-BR", {
//     hour12: false,
//     timeZone: "UTC",
//   });
// }

// const relogio = document.querySelector(".relogio");
// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const zerar = document.querySelector(".zerar");
// let segundos = 0;
// let timer;

// function iniciarTimer() {
//   timer = setInterval(function () {
//     segundos++;
//     relogio.innerHTML = criaHoraDosSegudos(segundos);
//   }, 1000);
//   relogio.classList.remove("pausado");
// }

// iniciar.addEventListener("click", iniciarTimer);

// pausar.addEventListener("click", function () {
//   clearInterval(timer);
//   relogio.classList.add("pausado");
// });

// zerar.addEventListener("click", function () {
//   clearInterval(timer);
//   segundos = 0;
//   relogio.classList.remove("pausado");
//   relogio.innerHTML = "00:00:00";
// });


const data = new Date()

console.log(`Dia: ${data.getDate()}`)
console.log(`Mês: ${data.getMonth()}`)
console.log(`Ano: ${data.getFullYear()}`)
console.log(`Hora: ${data.getHours()}`)
console.log(`Min: ${data.getMinutes()}`)
console.log(`Seg: ${data.getSeconds()}`)
console.log(`Ms: ${data.getMilliseconds()}`)
console.log(`Dia Semana: ${data.getDay()}`)