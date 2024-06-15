const nome = 'Michel'
const sobrenome  = 'Hoffmann'
const idade = 25
const peso = 100
const altura = 1.89
let imc = peso / (altura * altura)
let anoNascimento = 2024 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu imc é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)