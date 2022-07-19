function meuEscopo() {
  const form = document.querySelector('.form')
  const res = document.querySelector('.res')

  function calcularImc(evento) {
    evento.preventDefault()
    let peso = document.querySelector('#peso')
    peso = Number(peso)
    let altura = document.querySelector('#altura')
    altura = Number(altura)
    let imc = peso / (altura * 2)

    res.innerHTML += `<p>Seu imc é: ${imc}</p>`

    // if (imc <= 18.5) {
    //   res.innerHTML += `<p>Abaixo do peso</p>`
    // } else if (imc > 18.5 && imc < 25) {
    //   res.innerHTML += `<p>Peso normal</p>`
    // } else if (imc >= 25 && imc <= 30) {
    //   res.innerHTML += `<p>Sobrepeso/p>`
    // } else if (imc >= 30 && imc < 35) {
    //   res.innerHTML += `<p>Obesidade grau 1</p>`
    // } else if (imc >= 35 && imc < 40) {
    //   res.innerHTML += `<p>Obesidade grau 2</p>`
    // } else {
    //   res.innerHTML += `<p>Obesidade grau 3</p>`
    // }
    console.log(peso, altura)
    res.classList.add(resultado)
  }
  form.addEventListener('submite', calcularImc)
}
meuEscopo()
