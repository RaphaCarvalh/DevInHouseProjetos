console.log("[M1S03] Ex 2 - Mensagem Arrow");

let entrada = document.getElementById('entrada');
let nome = document.getElementById('nome');

const mensagemOla = () => {
  const resultado = `Olá, ${nome.value}!`;
  entrada.innerHTML = resultado;
  console.log(resultado);

  return resultado;
};



// console.log('e02-s03-m1');

// const entradaNome = document.getElementById('nome');
// const botaoAcao = document.getElementById('acao');
// const pMensagem = document.getElementById('mensagem');

// // Resolução:
// /*
// const mensagemOla = (nome) => {
//   return `Olá, ${nome}!`;
// };
// */

// // podemos omitir as chaves e return statement
// const mensagemOla = nome => `Olá, ${nome}!`;

// const resultado = mensagemOla("Mariana");
// console.log(resultado);
// // "Olá, Mariana!"

// botaoAcao.addEventListener('click', () => {
//   pMensagem.innerHTML = mensagemOla(entradaNome.value);
// });