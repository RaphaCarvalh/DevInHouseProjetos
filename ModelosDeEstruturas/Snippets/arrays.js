//ARRAYS 


//ADICIONANDO ELEMENTOS EM UM ARRRAY USANDO O  (LENGHT)


const alunos = ["Rani", "Cristina", "Edu","Maria"]
alunos[alunos.length] = "Gio"

console.log(alunos) // Foi adicionado Gio no array alunos

//----------------------------------------------------------
//ADICIONANDO ELEMENTOS EM UM ARRRAY USANDO O  (PUSH)

const alunos = ["Rani", "Cristina","Edu","Maria"]
alunos.push("Lari")

console.log(alunos) // Foi adicionado Lari no array alunos

//------------------------------------------------------------

//ADICIONADO O ELEMENTO EM PRIMEIRO NO ARRAY USANDO (UNSHIFT)

const alunos = ["Rani", "Cristina","Edu","Maria"]
const adicionadoAluno = alunos.unshift("Eu Sou")

console.log(alunos)// Foi adicionado Eu sou no inicio do array alunos


//----------------------------------------------------------

//QUANDO SOUBER A POSIÇÃO DO ELEMENTO E QUISER TROCAR POR OUTRO ELEMENTO 
const alunos = ["Rani", "Cristina","Edu","Maria"]
const novoAluno = ("Gabi")

alunos[3] = novoAluno
console.log(alunos) //trocou o indice 3 que era Maria por Gabi

//-------------------------------------------------------------

        //REMOVENDO ELEMENTOS DO ARRAY

//REMOVENDO O ELEMENTO DO INICIO DO ARRAY USANDO O (SHIFT)

const alunos = ["Rani", "Cristina","Edu","Maria"]
alunos.shift()

console.log(alunos)// Foi removido Rani do inicio do array alunos

//---------------------------------------------------------------

// REMOVENDO O ELEMENTO FINAL DO ARRAY USANDO O (POP)

const alunos = ["Rani", "Cristina","Edu","Maria"]
alunos.pop()

console.log(alunos)// Foi removido Maria do final do array alunos

//------------------------------------------------------------------

// CASO NÃO QUEIRA QUE OS INDICES SEJAM ALTERADOS  APÓS USAR O POP USE:

const alunos = ["Rani", "Cristina","Edu","Maria"]

delete alunos[2] //USANDO O DELETE VOCÊ DEIXA O INDICE DOIS VAZIO NÃO SOFRENDO ALTERAÇÃO NOS OUTROS ÍNDICES

console.log(alunos)//Retornou o array com o indice 2 vazio, porém todos os outros elementos no mesmo indice a qual estavam antes

//--------------------------------------------------------------------

//PARA PEGAR UM ÍNDICE QUALQUER ESPECIFICO USE:

const alunos = ["Rani", "Cristina","Edu","Maria"]
console.log(alunos[3])// retornou o indice 3 que é Maria

//-----------------------------------------------------------------

// CASO QUEIRA PEGAR UMA "FATIA" DE ELEMENTO USE O (SLICE)

const alunos = ["Rani", "Cristina","Edu","Maria","Manu","Luiz","Gio"]
console.log(alunos.slice(0,3)) //o SLICE neste exemplo irá pegar os elementos do indice 0 até o 2

//----------------------------------------------------------------------

// CASO QUEIRA PEGAR UMA "FATIA" DE ELEMENTO SÓ QUE DE TRÁS PRA FRENTE, USE O (SLICE só que negativo) 

const alunos = ["Rani", "Cristina","Edu","Maria","Manu","Luiz","Gio"]
console.log(alunos.slice(0,-2)) // irá pegar todos menos os dois últimos índices

//----------------------------------------------------------------------

// CONCATENANDO ARRAYS COM (CONCAT)

/*
const arrayUm = [1,2,3]
const arrayDois = [4,5,6] // se eu quero concatenar o array um com o dois posso criar uma terceira variável como o exemplo abaixo:
const arrayTres = arrayUm.concat(arrayDois)

console.log(arrayTres)// irá retornar [1,2,3,4,5,6] // foi feito a junção/concatenação dos dois arrays
*/

//-------------------------------------------------------------------------

//USANDO O (CONCAT) TAMBÉM COM OUTRO EXEMPLO:

const arrayUm = [1,2,3]
const arrayDois = [4,5,6] // se eu quero concatenar o array um com o dois posso criar uma terceira variável como o exemplo abaixo e ainda acrescentar outras informações no array
const arrayTres = arrayUm.concat(arrayDois, "Rani", 22)

console.log(arrayTres)// irá retornar [1,2,3,4,5,6] // foi feito a junção/concatenação dos dois arrays e ainda foi acrescentado uma string "Rani" e mais o número 22

//--------------------------------------------------------------------------

//USANDO O SPREAD(...) COPIANDO VALORES IMÚTAVEIS(ARRAYS,OBJETOS,FUNCTION)

const arrayUm = [1,2,3]
const arrayDois = [4,5,6]
const arrayTres = [...arrayUm, ...arrayDois, "Rani", [7,8,9]]

cosnole.log(arrayTres) // ele copia com o spread(...) o valor do arrayUm e do arrayDois, então caso for feito uma alteração os arrays originais não são afetados,caso você 
                       // não utilize o spread se alterar o arrayUm e o arrayDois afeta os arrays originais. Também da pra fazer concatenação com o spread.

//--------------------------------------------------------------------------

// FUNÇÃO (FILTER) - ELA FILTRA O ARRAY 

let numeros = [5,50,80,115,56,8,21,3,78,7,96,54,1]

function callbackFilter(array){
        return valor > 25 
}                                                                           
                                                                                                                              
let numerosFiltrados = numeros.filter(callbackFilter)//o que basicamente fez foi usar o filter() para filtrar a função callbackFilter de acordo com o condição 
console.log(numerosFiltrados)                        // dentro da função  callbackFilter(return valor > 25), que nesse caso está retornando os valores dentro 
                                                     //do array que são maiores que 25

//---------------------------------------------------------------------------

//(FILTER) COM FUNÇÃO ANÔNIMA - QUANDO A FUNÇÃO NÃO RECEBE UM NOME

let numeros = [5,50,80,115,56,8,21,3,78,7,96,54,1]
                                                                                                                                                                                                     
let numerosFiltrados = numeros.filter(function(array) { //Função anônima (para entender como funciona uma função anônima vá na parte de funções)
        return array > 25
})
console.log(numerosFiltrados)   // retorna todos os números maiores que 25 igual ao exemplo anterior porém feita com função anônima.

//----------------------------------------------------------------------------

//(FILTER) COM ARROW FUNCTION

let numeros = [5,50,80,115,56,8,21,3,78,7,96,54,1]
                                                                                                                                                                                                     
let numerosFiltrados = numeros.filter(array => array > 25);  //Arrow Function (para entender como funciona uma arrow function vá na parte de funções)

console.log(numerosFiltrados) 

//----------------------------------------------------------------------------

//(MAP) ELE MUDA O VALOR DO ARRAY ORIGINAL, FAZENDO UM NOVO ARRAY DO MESMO TAMANHO DO ORIGINAL

let numeros = [5,50,80,115,56,8,21,3,78,7,96,54,1]
                                                                                                                                                                                                     
 function callbackMap(array){
        return array * 5
}  

let numerosMap = numeros.map(callbackMap)//o que basicamente fez foi usar o map() para retornar os valores dentro do arrya multiplicados por 5 
console.log(numerosMap) 


