function ValidaCpf(cpf) {
  this.cpfEnviado = cpf;
  if (this.cpfEnviado === undefined || this.cpfEnviado === "") {
    return "CPF Invalido";
  }

  this.cpfEnviado = this.cpfEnviado.replace(/\D+/g, "");
  if (this.cpfEnviado.length !== 11) {
    return "Faltam digitos no CPF";
  }

  const cpfArray = Array.from(this.cpfEnviado.slice(0, -2));
  let contador = cpfArray.length + 1;

  let cpfArray2 = cpfArray.map((valor, indice) => {
    let chave = Number(valor);
    let total = chave * contador;
    contador--;
    return total;
  });

  let digito1 = 0;
  for (const i in cpfArray2) {
    digito1 += cpfArray2[i];
  }

  digito1 = 11 - (digito1 % 11);
  if (digito1 > 9) digito1 = 0;
  console.log(digito1);
}
const cpf = new ValidaCpf("823.698.282-34");
// let teste = "823.698.282-34";
// teste = teste.replace(/\D+/g, "");
console.log(cpf);

//   8   2    3    6    9    8    2    8    2
// x10  x9   x8   x7   x6   x5   x4   x3   x2
//  80  18   24   42   54   40    8   24    4  total: 294
