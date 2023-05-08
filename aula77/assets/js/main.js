function ValidaCpf(cpfEnviado) {
 Object.defineProperty(this, "cpfLimpo", {
   get: function () {
     return cpfEnviado.replace(/\D+/g, "");
 },
});
}

ValidaCpf.prototype.valida = function() {
  if (typeof this.cpfLimpo === 'underfined') return false
  if (this.cpfLimpo.length !== 11) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digito1 = this.criaDigito(cpfParcial)
  return true
}

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial)

  let regressivo = cpfArray.length + 1
  const digito = cpfArray.reduce((ac, val) => {
    regressivo--
    return ac
  }, 0)
}

const cpf = new ValidaCpf("823.698.282-34");
console.log(cpf)