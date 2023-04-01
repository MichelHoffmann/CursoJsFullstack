function meuEscopo() {
  const h1 = document.querySelector("#h1");
  const data = new Date();
  const dataBrasil = dataFormatada(data);

  function dataFormatada(data) {
    const diasemana = data.getDay();
    const diames = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}, `;
  }

  h1.innerHTML = data.getDate();
}
meuEscopo();
