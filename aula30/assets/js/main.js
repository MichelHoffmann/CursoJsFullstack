function meuEscopo() {
  const h1 = document.querySelector("#h1");
  const data = new Date();

  function diaSemanaF(dia) {
    switch (dia) {
      case 0:
        return "domingo";
      case 1:
        return "segunda-Feira";
      case 2:
        return "terça-Feira";
      case 3:
        return "quarta-Feira";
      case 4:
        return "quinta-Feira";
      case 5:
        return "sexta-Feira";
      case 6:
        return "sábado";
    }
  }

  function mesF(mes) {
    switch (mes) {
      case 0:
        return "Janeiro";
      case 1:
        return "Fevereiro";
      case 2:
        return "Março";
      case 3:
        return "Abril";
      case 4:
        return "Maio";
      case 5:
        return "Junho";
      case 6:
        return "Julho";
      case 7:
        return "Agosto";
      case 8:
        return "Setembro";
      case 9:
        return "Outubro";
      case 10:
        return "Novembro";
      case 11:
        return "Dezembro";
    }
  }

  function dataFormatada(data) {
    const diaSemana = diaSemanaF(data.getDay());
    const diaMes = data.getDate();
    const mes = mesF(data.getMonth());
    const ano = data.getFullYear();
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = data.getSeconds();

    return `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${hora}:${min}`;
  }

  function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : num;
  }

  h1.innerHTML = dataFormatada(data);
}
meuEscopo();
