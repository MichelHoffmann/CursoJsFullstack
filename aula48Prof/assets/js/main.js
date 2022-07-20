const h1 = document.querySelector('#text')
const data = new Date()
const options = (h1.innerHTML = data.toLocaleString('pt-br', {
  dateStyle: 'full',
  timeStyle: 'short',
}))
