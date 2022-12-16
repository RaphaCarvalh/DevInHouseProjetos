console.log("[M1S03] Ex 2 - Mensagem Arrow");

let entrada = document.getElementById('entrada');
let nome = document.getElementById('nome');

const mensagemOla = () => {
  const resultado = `Olá, ${nome.value}!`;
  entrada.innerHTML = resultado;
  console.log(resultado);

  return resultado;
};