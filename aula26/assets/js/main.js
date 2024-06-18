function meuEscopo() {
  const form = document.querySelector("#form");
  const resultado = document.querySelector("#resultado");

  function capturaEventoForm(evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector("#peso");
    const inputAltura = evento.target.querySelector("#altura");
    const peso = formataInput(inputPeso.value)
    const altura = formataInput(inputAltura.value)

    const imc = calculaIMC(peso, altura);

    resultado.innerHTML = criaP(imc.toFixed(1));
  }

  function calculaIMC(peso, altura) {
    return peso / (altura * altura);
  }

  function criaP(imc) {
    if (imc < 18.5) {
      return `<p class="paragrafo-resultado">IMC: ${imc} - Abaixo do peso</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      return `<p class="paragrafo-resultado">IMC: ${imc} - Peso Normal</p>`;
    } else if (imc >= 25 && imc <= 29.9) {
      return `<p class="paragrafo-resultado">IMC: ${imc} - Acima do peso</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
      return `<p class="paragrafo-resultado">IMC: ${imc} - Obesidade Grau I</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
      return `<p class="paragrafo-resultado">IMC: ${imc} - Obesidade Grau II</p>`;
    } else if (imc >= 40) {
      return `<p class="paragrafo-resultado">IMC: ${imc} - Obesidade Grau III</p>`;
    }
  }

  function formataInput(input) {
    input = input.replace(",", ".")
    return (input = parseFloat(input));
  }

  form.addEventListener("submit", capturaEventoForm);
}

meuEscopo();

// function meuEscopo() {
//   const form = document.querySelector("#form");

//   form.addEventListener("submit", function preventReload(e) {
//     e.preventDefault();
//     const inputPeso = e.target.querySelector("#peso");
//     const inputAltura = e.target.querySelector("#altura");
//     const peso = Number(inputPeso.value);
//     const altura = Number(inputAltura.value);

//     if (!peso) {
//       setResultado("Peso invalido!", false);
//       return;
//     }

//     if (!altura) {
//       setResultado("Altura invalida!", false);
//       return;
//     }

//     const imc = getImc(peso, altura);
//     const nivelImc = getNivelImc(imc);

//     const msg = `Seu IMC é ${imc} ${nivelImc}`;
//     setResultado(msg, true);

//     console.log(imc, nivelImc);
//   });

//   function getNivelImc(imc) {
//     const nivel = [
//       "Abaixo do peso",
//       "Peso Normal",
//       "Acima do peso",
//       "Obesidade Grau I",
//       "Obesidade Grau II",
//       "Obesidade Grau III",
//     ];

//     if (imc >= 39.9) return nivel[5];
//     if (imc >= 34.9) return nivel[4];
//     if (imc >= 29.9) return nivel[3];
//     if (imc >= 24.9) return nivel[2];
//     if (imc >= 18.5) return nivel[1];
//     if (imc < 18.5) return nivel[0];
//   }

//   function getImc(peso, altura) {
//     const imc = peso / altura ** 2;
//     return imc.toFixed(2);
//   }

//   function criaP() {
//     const p = document.createElement("p");
//     return p;
//   }

//   function setResultado(msg, isValid) {
//     const resultado = document.querySelector("#resultado");
//     resultado.innerHTML = "";
//     const p = criaP();

//     if (isValid) {
//       p.classList.add("paragrafo-resultado");
//     } else {
//       p.classList.add("paragrafo-resultado-erro");
//     }

//     p.innerHTML = msg;
//     resultado.appendChild(p);
//   }
// }
// meuEscopo();
