_______________________________________________________________________
_______________________________________________________________________

// String
var nome = 'teste';

// Number
var idade = 28;
var decimal = 12.6;
var negativo = -3;

// Boolean
var verdadeiro = true;
var falso = false;

// Null
var nulo = null;
console.log(nulo);

//Undefined
var indefinido;
console.log(indefinido);

indefinido = 'Agora definiu um valor';
console.log(indefinido);

//Object
var pessoa = {
  nome: 'Thais',
  idade: 28,
  ativo: true,
  endereco: {
    rua: 'Avenida blábláblá',
    numero: 123,
    bairro: 'Centro',
  },
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['idade']);
console.log(pessoa.endereco.rua);

pessoa.nome = 'Willian';
console.log(pessoa.nome);

// Array
// 0, 1, 2, 3, 4
var lista = [1, 2, 3, 4];
console.log(lista);
console.log(lista[0]);
console.log(lista[4]);

var listaPessoas = [
  { nome: 'Thais', idade: 28 },
  { nome: 'Ana', idade: 20 },
];

console.table(listaPessoas[0]);
console.log(listaPessoas[0].nome);

// Typeof

var texto = 'aaaaa';
var numero = 123;
var boleano = false;
var objeto = { nome: 'teste' };
var lista = [{ nome: 'teste' }];

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof boleano);
console.log(typeof objeto);
console.log(typeof lista);

//Operadores matematicos - Number
console.log(1 + 1); // 2
console.log(1 + '1'); // 11 (concatenação)

console.log(1 - 1); // 0
console.log(1 - '1'); // 0

console.log(19 % 2);

// Atribuição
var soma = 1; // Atribuição simples
console.log(soma);
soma += 20; // Atribuição com soma
// soma = soma + 20
console.log(soma);

// Comparação
console.log(1 == 1); // Igualdade simples
console.log(1 === 1); // Igualdade estrita
console.log('1' == 1); // Igualdade simples
console.log('1' === 1); // Igualdade estrita

console.log('1' != 1); // Diferença simples
console.log('1' !== 1); // Diferença estrita

console.log(3 <= 3);

// Lógicos
var condicao1 = 1 === 1;
var condicao2 = 1 == 2;
console.log(condicao1, condicao2);

console.log(condicao1 && condicao2);
console.log(condicao1 || condicao2);

console.log(!condicao1);
console.log(!condicao2);

var teste = '11';

console.log(!teste);

var nome = 'Thais';
var apelido = '';

var chamarComo = apelido || nome;
console.log(chamarComo);

var chamarComo2 = apelido && nome;
console.log(chamarComo2);

// Unario
var contador = 2;
console.log(contador);

contador++; // contador = contador + 1
console.log(contador);

contador--; // contador = contador - 1
console.log(contador);


_______________________________________________________________________
//--! Fim Aula 2 semana 2 !!----//
//--! Inicio Aula 1 semana 3 !!----//
_______________________________________________________________________
//(Chamada de dados)
const titulo = document.getElementById("titulo");
console.log('Olá, dev!', titulo);

// Exemplo de Ternário

const ehVerdade = 'sdaf';
if (ehVerdade) {
  console.log('VERDADEIRO!');
} else {
  console.log('FALSO!');
}
ehVerdade ? console.log('VERDADEIRO!') : console.log('FALSO!');
const resultado = 2 + 2 === 4 ? "SIM" : "NAO";
console.log(resultado);


// Exemplo de Switch
const numero = 2;
if (numero === 0) {
  console.log('ZERO');
} else if (numero === 1) {
  console.log('UM');
} else if (numero === 2) {
  console.log('DOIS');
} else {
  console.log('OUTRO');
}


//(não é possivel fazer comparações)
switch (numero) {
  case 0:
    console.log('ZERO');
    break;
  case 1:
    console.log('UM');
    break;
  case 2:
    console.log('DOIS');
    break;
  default:
    console.log('OUTRO');
}

// Exemplo de uso de || / ??
const numA = 0;
const numB = numA || "AAAAAA";
const numC = numA ?? "AAAAAA";
console.log(numB, numC);

// Exemplo de uso de &&

const numD = 1;
const numE = numD && "BBBBBB";
console.log(numE);
const imprimeNaTela = true;
if (imprimeNaTela) {
  console.log("Imprimiu!");
}
imprimeNaTela && console.log("Imprimiu!");



// ARRAYS (vetores)

// Criando array vazio
const vetorA = [];

// Verificando se uma variável é array
const ehArray = Array.isArray(vetorA);
//console.log(ehArray);

// É possível inicializar com valores pré definidos
const vetorB = [2, 4, "asd", null, NaN];

// É possível acrescentar valores após definição
vetorB.push(234);
vetorB.push("CCCCCCCC");
// substituindo um valor
vetorB[1] = 444;

// Acessando um item
//console.log(vetorB[2]);
// Acessando item fora do array
//console.log(vetorB[111]);

// Como saber o tamanho do array
//console.log(vetorB.length);

// Asseccando ultimo item do array
//console.log(vetorB[vetorB.length - 1]);
//console.log(vetorB.at(-1));


// OBJECTS (objetos)

// Criando um objeto vazio
const objetoA = {};
// Criando objeto com chaves/valores predefinidos
const objetoB = { nome: 'Romeu', idade: 30 };
// Acrescentando chave/valor após definição
objetoB.ocupacao = 'Programador';
// Alterando o valor de uma chave já existente
objetoB.nome = 'Isaac';

// "Congelando" um objeto
Object.freeze(objetoB);
objetoB.nome = 'BBBBBBBBBBBBBBBBB';

// Criando um objeto já "congelando"
const objetoC = Object.freeze({ nome: "Teste" });

console.log(objetoB);

// EXEMPLOS DE ALTERAÇÕES POR REFERÊNCIAS
let numero = 1; // referência direta para 1
let numeroArray = [2]; // referência para endereço do array

const obj = { n: numero, nA: numeroArray };

numero = 333; // altera numero mas não obj.n
numero[0] = 444; // altera numeroArray e obj.nA

console.log({ obj, numero });
_______________________________________________________________________
//--! Fim Aula 1 semana 3 !!----//
//--! Inicio Aula 2 semana 3 !!----//
_______________________________________________________________________


// Exemplo inserção e remoção ao final do array
/*
const vetorExemplo = [];
vetorExemplo.push(1);
vetorExemplo.push('a');
vetorExemplo.push('ultimo');
const ultimo = vetorExemplo.pop();
console.log(vetorExemplo, ultimo);
*/

// FUNÇÕES

// Exemplo com matemática
// f(x, y) = x * 2 + y
// f(2, 3) = 2 * 2 + 3

function f(x, y) {
  return x * 2 + y;
}

function funcaoExemplo(x, y) {
  // Exemplo de verificação de parâmetros
  if (typeof x !== 'number' || typeof y !== 'number') {
    // caso algum dos parametros não forem numeros
    // interrompo a execução e retorno undefined
    return;
  }

  return x * 2 + y;
}

const resultadoA = funcaoExemplo(2);
const resultadoB = funcaoExemplo(5, 8);

//console.log(resultadoA);
//console.log(resultadoB);

// Função sem parâmetros nem retorno
/*
function dahOi() {
  //...
  console.log("Oi!");
}
dahOi();
*/

// Exemplo com parâmetros e string
function olaNome(nome, idade) {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}
const texto = olaNome('Bolacha', 33);
// console.log(texto);

// Função anônima imediatamente executada
/*
(function () {
  console.log(`Sou uma função anônima!`);
})();
*/

// Função anônima atribuída a uma variável
const variavelComFuncao = function (n) {
  console.log(`Funciono mesmo em uma variável ${n}!`);
};
//variavelComFuncao(6666);

// ARROW FUNCTION

// Arrow function completa
const vArrowCompleta = (n) => {
  console.log(`Arrow completa ${n}!`);
};

// Caso apenas um parametro podemos omitir os parentesis
const vArrowSemParentesis = n => {
  console.log(`Arrow sem parentesis ${n}!`);
};

// Caso apenas uma expressão no corpo podemos
// omitir inclusive as chaves do bloco de funcao
const vArrowSemChaves = n => 
  console.log(`Arrow sem parentesis ${n}!`);


// COMPARANDO FUNÇÕES
// funcao comum
function fComum(x) {
  return x * 10000;
}
// arrow function completa
const fArrowC = (x) => {
  return x * 10000;
}
// arrow function sem parentesis
const fArrowP = x => {
  return x * 10000;
}
// arrow function sem chaves 
const fArrow = x => x * 10000;

const rC = fComum(3);
const rA = fArrow(6);
//console.log(rC);
// console.log(rA);


// Exemplo de diferenças de contexto this
const objeto = {
  nome: "Teste",
  nomeDaFuncao: function () {
    // este this é o objeto
    console.log(this);
    console.log(window === this);
  },
  nomeDaArrow: () => {
    // este this é o contexto global window
    console.log(this);
    console.log(window === this);
  }
};
//objeto.nomeDaFuncao();
//objeto.nomeDaArrow();

const vetorB = ['A', 'B', 'C'];

console.log(vetorB);

for (let i = 0; i < vetorB.length; i++) {
  console.log(`i: ${i} v: ${vetorB[i]}`);
}

// exemplo de funcao comum como parametro
vetorB.forEach(function (valor) {
  console.log(`v: ${valor}`);
});

// exemplo de arrow function como parametro
vetorB.forEach(valor => console.log(`v: ${valor}`));


function calculaPontoA(x, y, z) {
  return [x * 2, y * 2, z * 2];
}

const calculaPontoB = (x, y, z) => [x * 2, y * 2, z * 2];

console.log(calculaPontoB(1, 2, 3));

_______________________________________________________________________
//--! Fim Aula 2 semana 3 !!----//
//--! Inicio Aula 3 semana 3 !!----//
_______________________________________________________________________

// Impede o uso de variáveis que não existem
// "use strict"; seem esse elemento uma variavel sem definição ou criada errada é aceita e sobe para o scopo global.

// Automaticamente presente em script do tipo módulo

// Escopo Global
var minhaVariavel = "ConteudoDaVariavel";

function funcaoExemplo() {
  // Escopo de Função
  var varEscopoFunc = "NoEscopoDaFuncao";
}

if (minhaVariavel) {
  // Escopo de Bloco
  var varEscopoBloco = "NoEscopoDoBloco";
}


// Exemplo VAR em escopo de função
function definirLargura() {
  var largura = 100;
  console.log(largura);
}
definirLargura();
  console.log(largura);


// Exemplo VAR em escopo de bloco
var altura = 100;
if (altura > 90) {
  var largura = 100;
  //console.log(largura);
}
//console.log(largura);


// Exemplo LET escopo de bloco
let pontos = 50;
let venceu = false;

if (pontos > 40) {
  //console.log('Passei pelo if!');
  let venceu = true;
}
//console.log('Venceu:', venceu);
// Venceu: false

// Exemplo CONST
const pessoa = {
  nome: 'Vitória',
  idade: 31
};

// O que vai acontecer nas ocasiões abaixo?
// pessoa = { nome: 'Chinforínfola' };

pessoa.peso = 40;

console.log(pessoa);

// Como impedir que propriedades sejam alteradas?
const vitoria = Object.freeze(pessoa);

const texto = ["blablabla"];
texto[0] = "batata";
//console.log(texto);
texto[1] = "couve";
//console.log(texto);

const numero = [45];
numero[0] = 33;


// function pegaPrompt() {
//   const digitado = prompt("Digite algo:");
//   console.log(digitado);
// }
// pegaPrompt();
// pegaPrompt();
// pegaPrompt();

const lista = [4, 5, 2, 77, 8];
let max = 0;
for (let i = 0; i < lista.length; i++) {
  const num = lista[i];
  if (num > max) {
    max = num;
  }
}
//console.log(max);

// Exemplo de criação de variável global
window.minhaVariavelGlobal = "teste";
//console.log(minhaVariavelGlobal);


// Exemplo HOISTING de VAR
// console.log(numA); // undefined
// var numA;
// numA = 6;

// numB = 12;
// console.log(numB); // 12
// var numB;

// Exemplo HOISTING de FUNCTION
dahOi();
function dahOi() {
  console.log("Oi!");
}

// Exemplo exercício
// testa se termo existe em texto
function procuraTermo(parametros) {
  const texto = parametros.texto;
  const termo = parametros.termo;

  return texto.includes(termo);
}

const testeA = procuraTermo({
  texto: "O rato roeu a roupa do rei de Roma.",
  termo: "rato"
}); // Deve retornar: true

const testeB = procuraTermo({
  texto: "O rato roeu a roupa do rei de Roma.",
  termo: "batata"
}); // Deve retornar: false

console.log({ testeA, testeB })

_______________________________________________________________________
//--! Fim Aula 3 semana 3 !!----//
//--! Inicio Aula 4 semana 3 !!----//
_______________________________________________________________________

console.log("Aula 4");

// EXEMPLO REST (declaração de função)

// function somaTudo(a, b, ...vetor) {
const somaTudo = (a, b, ...vetor) => {
  console.log({ a, b, vetor });
  let total = 0;

  for (let i = 0; i < vetor.length; i++) {
    total += vetor[i];
  }
  return total;
}
// Resultado é 18 pois 1 e 2 são destacados na linha 6
// const resultado = somaTudo(1, 2, 3, 4, 5, 6);
// console.log({ resultado });


// EXEMPLO SPREAD (PARAMETROS)
// const vetorA = [1, 2, 3, 4];

function multiplicaTudo(a, b, c, d, e) {
  console.log({ a, b, c, d, e });
}
// multiplicaTudo(555,  ...vetorA, 999);

// EXEMPLO SPREAD (array)
const vetorB = [11, 22, ...vetorA, 33];

//console.log(vetorB);

// EXEMPLO concatenação de arrays com SPREAD
const vetorC = [...vetorB, ...vetorA];
//console.log(vetorC);


// EXEMPLO SPREAD (objeto)
const objA = { a: 1, b: 2, c: 3 };
// dependendo da ordem em que chaves iguais
// forem acrescentadas as últimas tem prioridade
const objB = { b: 44, ...objA, c: 55, d: 66 };
// console.log(objB);


// EXEMPLO DESTRUCTURING (array)
const vetorD = ["Romeu", 30, "Programador", "Mentor"];

const [batata, arroz, ...feijao] = vetorD;
//console.log({ batata, arroz, feijao });


// EXEMPLO DESTRUCTURING (array/parametro)
function coordenadas([x, ...r], extra) {
  console.log({ x, r, extra });
}

const ponto = [1, 2, 3]
//coordenadas(ponto, false);

// EXEMPLO DESTRUCTURING (object)
// const objetoC = {
//   nome: "Romeu",
//   idade: 30,
//   ocupacao: ["Programador", "Mentor"]
// };

// const { nome, ...info } = objetoC;

//console.log({ nome, info });

function exibePessoa(props) {
  const { nome, idade, ocupacao } = props;

  console.log(nome, idade, ocupacao);
}

//exibePessoa(objetoC)


// Exemplo destruct e map
const multiplicar = (multip, ...numeros) => {
  console.log({ numeros });
  return numeros.map((n) => {
    return multip * n;
  });
}


// chamada da função
//const resultado = multiplicar(2, 4, 3, 1, 8);
// [8, 6, 2, 16]

console.log(resultado);


const [...r] = "teste";

console.log({ r });