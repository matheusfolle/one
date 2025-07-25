// Desafios dia 2 - Oracle Next Education

// // Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio:

// let titulo = document.querySelector("h1");

// titulo.innerHTML = "Hora do Desafio";


// // Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado:

// function exibirMensagemNoConsole() {
//     console.log("O botão foi clicado!");
// }

// // Crie uma função que exiba um alerta com a mensagem: Eu amo Js, sempre que o botão Alerta for pressionado:


// function mensagemJS() {
//     alert("Eu amo JS!");
// }

// function verificarStatus() {
//     console.log("Eu amo JS!");
// }

// // Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você:

// let cidade = prompt("Digite o nome de uma cidade do Brasil que você gosta:");

// alert(`Estive na cidade de ${cidade} e lembrei de você`);

// // Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

// function soma() {
//     let num1 = parseInt(prompt("Vamos fazer uma adição, insira o primeiro número:"));
//     let num2 = parseInt(prompt("Insira o segundo número:"));
//     let resultado = num1 + num2;
//     alert(`O resultado da soma é ${resultado}`);
// }

// ! Desafios
// // Criar uma função que exibe "Olá, mundo!" no console.

// function digaOlaAoMundo() {
//     console.log("Hello, world!");
// }

// digaOlaAoMundo();

// // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function olaUsuario(nomeDoUsuario) {
//     console.log(`Olá, ${nomeDoUsuario}`);
// }

// olaUsuario("Maria");

// // Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function oDobroDoNumero(numero) {
//     let resultado = parseInt(numero * 2);
//     console.log(`O dobro de ${numero} é ${resultado}`);
// }

// oDobroDoNumero(5);

// // Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function retornaAMedia(num1, num2, num3) {
//     return parseFloat(num1 + num2 + num3) / 3;
// }

// console.log(retornaAMedia(5, 4, 6));

// // Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function retornarMaior(num1, num2) {
//     if (num1 > num2) {
//         return console.log(`O número 1 (${num1}) é maior que número 2 ${num2}`);
//     } else {
//         return console.log(`O número 2 (${num2}) é maior que número 1 ${num1}`);
//     }
// }

// console.log(retornarMaior(8, 7));

// // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function quadradoDoNumero(num) {
//     return num * num;
// }

// console.log(quadradoDoNumero(5));

// Desafios 3

// // Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function indiceDeMassa(altura, peso) {
//   return Number(peso) / Number((altura) * Number(altura));
// }

// console.log(indiceDeMassa(176, 77));

// // Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function fatorialDoNum(num) {
//   let contador = 1;
//   let resultado = 1;
//   while(contador <= num){
//     resultado *= contador;
//     contador++;
//   }
//   return resultado;
// }

// // Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// function valorEmDolar(dolar){
//   dolar = Number(dolar);
//   let resultado = 0;
//   let cotacaoDolar = 4.80;
//   resultado = dolar * cotacaoDolar;
//   return resultado.toFixed(2)
// }

// console.log(valorEmDolar(15));

// // Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// function calculaArea(altura, largura) {
//   return Number(altura) * Number(largura);
// }

// function calculaPerimetro(altura, largura) {
//   return (Number(altura) + Number(largura)) * 2;
// }

// // Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function areaCircular(raio) {
//   let area = Math.PI * (Number(raio) * Number(raio)); 
//   let perimetro = (2 * Math.PI) * Number(raio);

//   console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//   console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`)
// }

// areaCircular(6);

// // Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function tabuada(num) {
//   let contador = 1;
//   while(contador <= 10) {
//     let resultado = Number(num) * contador;
//     console.log(`${num} x ${contador} = ${resultado}`);
//     contador++;
//   }
// }

// tabuada(8)

// Desafios 4 
// // Crie uma lista vazia, com o nome listaGenerica.

// let listaGenerica = [];

// // Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

// let listaLinguagens = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// // Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

// listaLinguagens.push("Java", "Ruby", "GoLang");
// console.log(listaLinguagens);

// // Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

// let listaTresElementos = ["Danone", "Yakult", "Bebida Proteica"];
// console.log(listaTresElementos[0]);

// // Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

// console.log(listaTresElementos[1]);

// // Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

// console.log(listaTresElementos[2]);


