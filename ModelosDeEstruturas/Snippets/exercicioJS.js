// Caro Fulano(a)!

// Você está convidado(a) para o casamento de Beltrano(a) e Ciclano(a), a ser realizado no dia 05/12/2022, às 16 horas.

// Contamos com a sua presença!

// Atenciosamente,
// os noivo(a)s

var convidado = 'Thais';
var noivos = 'João e Maria';
var dataFormatada = '05/12/2022, às 16 horas';

var texto =
  'Caro(a) ' +
  convidado +
  '! \n\nVocê está convidado(a) para o casamento de ' +
  noivos +
  ', a ser realizado no dia ' +
  dataFormatada +
  '.\n\nContamos com a sua presença!\n\nAtenciosamente,\nos noivo(a)s';

var texto2 = `Olá ${convidado}
teste
`;

console.log(texto);
console.log(texto2);

//Aula3

var isAutenticado = true;
if (!isAutenticado) {
  console.log('não está autenticado');
}

var nota1 = 8;
var nota2 = 7;
var nota3 = 6;

var media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
  console.log('Superou a média!');
} else if (media === 7) {
  console.log('Ficou na média!');
} else {
  console.log('Não atingiu a média!');
}

var produto = 'caneta';
switch (produto) {
  case 'copo':
  case 'caneca':
    console.log('5,00');
    break;
  case 'caneta':
    console.log('1,50');
    break;
  default:
    console.log('Produto não encontrado');
}

var teste = null;

if (teste === null) {
  console.log('é nulo');
}