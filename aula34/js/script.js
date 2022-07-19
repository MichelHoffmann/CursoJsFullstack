function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.getElementById('res')

  const pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault()
    const nome = form.querySelector('#nome')
    const sobrenome = form.querySelector('#sobrenome')
    const peso = form.querySelector('#peso')
    const altura = form.querySelector('#altura')

    pessoas.push({
      name: nome.value,
      lastname: sobrenome.value,
      wheight: peso.value,
      height: altura.value,
    })
    console.log(pessoas)

    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
  }

  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()
