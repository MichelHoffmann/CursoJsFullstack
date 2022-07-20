const data = new Date()
const diaSemana = data.getDay()
const dia = data.getDate()
const mes = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const min = data.getMinutes()
let diaSemanaText
let mesText

function getDiaSemana(diaSemana) {
  if (diaSemana === 0) {
    return (diaSemanaText = 'Domingo')
  } else if (diaSemana === 1) {
    return (diaSemanaText = 'Segunda-feira')
  } else if (diaSemana === 2) {
    return (diaSemanaText = 'Terça-feira')
  } else if (diaSemana === 3) {
    return (diaSemanaText = 'Quarta-feira')
  } else if (diaSemana === 4) {
    return (diaSemanaText = 'Quinta-feira')
  } else if (diaSemana === 5) {
    return (diaSemanaText = 'Sexta-feira')
  } else if (diaSemana === 6) {
    return (diaSemanaText = 'Sabado')
  } else {
    return (diaSemanaText = '')
  }
}

function getMounthText(mes) {
  if (mes === 0) {
    return (mesText = 'Janeiro')
  } else if (mes === 1) {
    return (mesText = 'Fevereiro')
  } else if (mes === 2) {
    return (mesText = 'Março')
  } else if (mes === 3) {
    return (mesText = 'Abril')
  } else if (mes === 4) {
    return (mesText = 'Maio')
  } else if (mes === 5) {
    return (mesText = 'Junho')
  } else if (mes === 6) {
    return (mesText = 'Julho')
  } else if (mes === 7) {
    return (mesText = 'Agosto')
  } else if (mes === 8) {
    return (mesText = 'Setembro')
  } else if (mes === 9) {
    return (mesText = 'Outubro')
  } else if (mes === 10) {
    return (mesText = 'Novembro')
  } else if (mes === 11) {
    return (mesText = 'Dezembro')
  } else {
    return (mesText = '')
  }
}

function zeroAEsquerda(num) {
    if (num >= 10) {
        return num
    } else {
        return `0${num}`
    }
}

const h1 = document.querySelector('#text')
h1.innerHTML = `${getDiaSemana(diaSemana)}, ${zeroAEsquerda(dia)} de ${getMounthText(mes)} de ${ano} ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`
