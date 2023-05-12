class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfEnviado", {
      value: cpfEnviado,
      enumerable: false,
      writable: true,
    });
  }

  verificaCpf() {
    this.cpfEnviado = this.cpfEnviado.replace(/\D+/g, "");
    this.cpfArray = this.cpfEnviado.slice(0, -2);
    this.cpfArray = Array.from(this.cpfArray);
    return this.cpfArray;
  }

  criaDigito() {
    let total = 0;
    let ac = this.cpfArray.length + 1;
    this.cpfNovo = this.cpfArray.map((valor) => {
      total += ac * Number(valor);
      ac--;
      return total;
    });
    total = 11 - (total % 11);
    total = total > 9 ? 0 : total;
    total = String(total);
    this.cpfArray.push(total);
    return this.cpfArray;
  }

  valida() {
    if (this.cpfEnviado === undefined) return false;
    if (this.cpfEnviado === "") return false;
    this.verificaCpf();
    if (this.cpfEnviado.length !== 11) return false;

    this.criaDigito();
    this.criaDigito();
    this.cpfVerificado = this.cpfArray.join("");

    return this.cpfVerificado === this.cpfEnviado;
  }
}

// const cpf = new ValidaCpf("823.698.282-34");
// console.log(cpf.valida());

//70 Linhas

//   8   2    3    6    9    8    2    8    2
// x10  x9   x8   x7   x6   x5   x4   x3   x2
//  80  18   24   42   54   40    8   24    4  total: 294

// 11 - ( 294 % 11 ) = 3

//   8    2    3    6    9    8    2    8    2    3
// x11  x10   x9   x8   x7   x6   x5   x4   x3   x2
//  88   20   27   48   63   48   10   32    6    6  total: 348

// digito = 11 - (digito % 11);
// if (digito > 9) digito = 0;
