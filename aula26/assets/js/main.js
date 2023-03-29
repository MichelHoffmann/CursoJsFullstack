function meuEscopo() {
  const form = document.querySelector("#form");
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");

  function preventReload(evento) {
    evento.preventDefault();
    console.log(`Peso: ${peso.value} <br> Altura: ${altura.value}`);
  }

  form.addEventListener("submit", preventReload);
}
meuEscopo();
