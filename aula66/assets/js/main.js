 numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosDobrados = numeros.map(valor => valor * 2)
//console.log(numerosDobrados)




const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomeDasPessoas = pessoas.map((obj) => obj.nome);

const pessoasSemChaveIdade = pessoas.map((obj) => ({idade: obj.idade}));

const comId = pessoas.map((obj, indice) {
  const id = indice
  return {
    id: id
  }
})

console.log(pessoasSemChaveIdade);
