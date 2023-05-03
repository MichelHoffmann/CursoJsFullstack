const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "Luiz", idade: 62 },
];

//const maisVelha = pessoas.reduce((acumulador, valor, indice) => {
//if (pessoas[indice].idade > acumulador) {
//acumulador = pessoas[indice].idade;
//console.log(acumulador)
//}
//return acumulador
//}, 0)

//OUTRA FORMA DE RESOLVER
const maisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor.idade;
});

console.log(`Mais Velha: ${maisVelha}`);
