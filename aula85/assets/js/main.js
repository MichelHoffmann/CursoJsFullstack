class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmite(e);
    });
  }

  handleSubmite(e) {
    e.preventDefault();
  }
}

const valida = new ValidaFormulario();
