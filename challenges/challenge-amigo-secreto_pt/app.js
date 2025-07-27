//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let nome = document.querySelector("#amigo").value;
  if(nome) {
    amigos.push(nome);
    document.querySelector("#amigo").value = "";
    atualizaLista();
  } else {
    alert("Por favor, insira um nome!");
  }
}

function atualizaLista() {
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  let lista = document.querySelector("#resultado");

  if (amigos.length === 0) {
    alert("A lista de amigos está vazia!");
    return;
  }
  let index = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[index];
  let li = document.createElement("li");
  li.textContent = sorteado;
  lista.appendChild(li);

}

console.log(amigos);