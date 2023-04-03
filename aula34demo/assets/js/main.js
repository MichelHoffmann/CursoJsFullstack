const elementos = [
  { tag: "p", texto: "Frase1" },
  { tag: "div", texto: "Frase2" },
  { tag: "footer", texto: "Frase3" },
  { tag: "section", texto: "Frase4" },
];

for (let i = 0; i < elementos.length; i++) {
  const container = document.querySelector(".container");
  const tag = document.createElement(elementos[i].tag)
  container.appendChild(tag)
  tag.innerHTML = elementos[i].texto
}
