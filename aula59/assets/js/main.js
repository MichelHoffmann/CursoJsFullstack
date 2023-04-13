function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.key !== "Enter") return;
      this.display.focus();
      this.realizaConta();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear(el);
      if (el.classList.contains("btn-del")) this.del(el);
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
    });
  };

  this.realizaConta = (e) => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta Invalida");
        return;
      }

      this.display.value = conta;
    } catch (e) {
      alert("Conta invalida!");
      return;
    }
  };

  this.del = (e) => (this.display.value = this.display.value.slice(0, -1));
  this.addNumDisplay = (el) => (this.display.value += el.innerText);
  this.clear = (e) => (this.display.value = "");
}

const calculadora = new Calculadora();
calculadora.inicia();
