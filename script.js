let header = document.querySelector("header");
let title = document.createElement("h1");
let titleText = document.createTextNode("Exemplo de site com JavaScript");
title.appendChild(titleText);
header.appendChild(title);

let main = document.querySelector("main");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
main.appendChild(div1);
main.appendChild(div2);

let h2_1 = document.createElement("h2");
let p_1 = document.createElement("p");
let h2_1Text = document.createTextNode("Primeiro div");
let p_1Text = document.createTextNode("este é o primeiro div criado com JavaScript, ele tem um título h2 e um parágrafo p como filhos.");
h2_1.appendChild(h2_1Text);
p_1.appendChild(p_1Text);
div1.appendChild(h2_1);
div1.appendChild(p_1);


let h2_2 = document.createElement("h2");
let p_2 = document.createElement("p");
let h2_2Text = document.createTextNode("Segundo div");
let p_2Text = document.createTextNode("este é o segundo div criado com JavaScript, ele também tem um título h2 e um parágrafo p como filhos.");
h2_2.appendChild(h2_2Text);
p_2.appendChild(p_2Text);
div2.appendChild(h2_2);
div2.appendChild(p_2);