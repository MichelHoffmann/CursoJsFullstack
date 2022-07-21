const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')
const teste = document.querySelector('.teste')

const bodyStyles = getComputedStyle(document.body)
const bgColorBody = bodyStyles.backgroundColor

teste.style.backgroundColor = '#232323'

for (let p of ps) {
    p.style.backgroundColor = bgColorBody
    p.style.color = '#ffffff'
}