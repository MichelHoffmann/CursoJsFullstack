function zeroEsqueda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroEsqueda(data.getDate());
  const mes = zeroEsqueda(data.getMonth() + 1);
  const ano = data.getFullYear();
  const hora = zeroEsqueda(data.getHours());
  const min = zeroEsqueda(data.getMinutes());
  const seg = zeroEsqueda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const date = new Date();
const dateBrasil = formataData(date);
console.log(dateBrasil);
