function ValidaCpf(cpf) {
  this.cpfEnviado = cpf;
  this.cpfEnviado = this.cpfEnviado.replace(/\D+/g, "");

  this.validaCpfEnviado = function () {
    if (this.cpfEnviado === undefined || this.cpfEnviado === "") {
      return "CPF Invalido";
    }
  }.bind(this);

  this.verificaQtdDigitos = function () {
    if (this.cpfEnviado.length !== 11) {
      return "Faltam digitos no CPF";
    }
  }.bind(this);

  let cpfArray = Array.from(this.cpfEnviado.slice(0, -2));

  this.criaDigito = function () {
    let contador = cpfArray.length + 1;
    let cpfArray2 = cpfArray.map((valor) => {
      let chave = Number(valor);
      let total = chave * contador;
      contador--;
      return total;
    });

    let digito = 0;
    for (const i in cpfArray2) {
      digito += cpfArray2[i];
    }

    digito = 11 - (digito % 11);
    if (digito > 9) digito = 0;

    cpfArray.push(String(digito));
  }.bind(this);

  this.comparaCpf = function () {
    if (this.cpfEnviado === cpfRecriado) {
      console.log("");
      console.log("CPF Validado com sucesso!");
      console.log("");
    } else {
      console.log("");
      console.log("Warning! CPF invalido!");
      console.log("");
    }
  }.bind(this);

  this.validaCpfEnviado();
  this.verificaQtdDigitos();
  this.criaDigito(); //Criou o primeiro digito
  this.criaDigito(); //Criou o segundo
  const cpfRecriado = cpfArray.join("");
  this.comparaCpf();
}
const cpf = new ValidaCpf("823.698.282-34");
console.log(cpf);

//70 Linhas

//   8   2    3    6    9    8    2    8    2
// x10  x9   x8   x7   x6   x5   x4   x3   x2
//  80  18   24   42   54   40    8   24    4  total: 294

// 11 - ( 294 % 11 ) = 3

//   8    2    3    6    9    8    2    8    2    3
// x11  x10   x9   x8   x7   x6   x5   x4   x3   x2
//  88   20   27   48   63   48   10   32    6    6  total: 348
