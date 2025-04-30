const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  document.querySelector(".lista").innerHTML = "";

  const terminal = document.createElement("li");
  terminal.textContent = "Terminal";       
  document.querySelector(".lista").appendChild(terminal); 

  const node = document.createElement("li");
  node.textContent = "Node";       
  document.querySelector(".lista").appendChild(node);

  const oop = document.createElement("li");
  oop.textContent = "Oop";       
  document.querySelector(".lista").appendChild(oop);

  const typescript = document.createElement("li");
  typescript.textContent = "Typescript";       
  document.querySelector(".lista").appendChild(typescript); 

  const css = document.createElement("li");
  css.textContent = "Css";       
  document.querySelector(".lista").appendChild(css);

  const dom = document.createElement("li");
  dom.textContent = "Dom";       
  document.querySelector(".lista").appendChild(dom);
  
}

main();
