class ValidaCpf{
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfEnviado', {
      value: cpfEnviado,
      enumerable: false,
      writable: true
    })
  }

  verificaCpfVazio()
  formataCpf()
  criaDigito()

  verificaCpfVazio() {
    if (this.cpfEnviado === undefined) return 'Cpf Invalido'
    if (this.cpfEnviado === '') return 'Cpf Invalido'
  }
  
  formataCpf () {
    this.cpfEnviado = this.cpfEnviado.replace(/\D+/g, '')
    this.cpfArray = this.cpfEnviado.slice(0, -2)
    return Array.from(this.cpfArray)
  }

  criaDigito() {
    this.novoCpf = this.cpfArray.map(function (ac, valor) {
      console.log(ac, valor)
    })
  }
}

const cpf = new ValidaCpf('823.698.282-34')
console.log(cpf)

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