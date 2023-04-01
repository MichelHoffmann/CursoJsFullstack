function meuEscopo() {
  const h1 = document.querySelector("#h1");
  const data = new Date();
  const dataBrasil = dataFormatada(data);

  function diaSemanaF(dia) {
    switch (dia) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda-Feira";
      case 2:
        return "Terça-Feira";
      case 3:
        return "Quarta-Feira";
      case 4:
        return "Quinta-Feira";
      case 5:
        return "Sexta-Feira";
      case 6:
        return "Domingo";
    }
  }

  function mesF(mes) {
    switch (mes) {
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
      case 0:
        return "Janeiro";
    }
  }

  function dataFormatada(data) {
    const diaSemana = diaSemanaF(data.getDay());
    const diaMes = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${hora}:${min}`;
  }

  h1.innerHTML = dataBrasil;
}
meuEscopo();
