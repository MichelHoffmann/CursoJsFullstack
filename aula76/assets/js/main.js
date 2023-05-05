function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  //Essa call é como se estivesse criando um objeto 'Produto' dentro do objeto 'Camiseta'
  Produto.call(this, nome, preco);
}

//Linkando os prototypes
Camiseta.prototype = Object.create(Produto.prototype);

//Devolvendo a propriedade 'Constructor' de 'Camiseta
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca("Chicara", 15, "Porcelana");
const camiseta = new Camiseta("regata", 7.5, "preta");
const gen = new Produto("Gen", 10);

caneca.aumento(15);
console.log(caneca);
