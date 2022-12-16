
// React

//------------------------------------------
/*
° class do css agora é className
° onclick agora é onClick //com camel case
° imagens precisam ser importadas
° declaramos funções no próprio componente
° onclick="apertou()" agora é onClick={Apertou} //chama a função dentro das chaves
° regra do pai único
° podemos referenciar expressões no JSX
*/

//------------------------------------------
// CHAMANDO VARIÁVEIS 

/*

Para chamar uma variável dentro do jsx coloca ela em chaves exemplo:

const texto = "eu sou um texto"
agora chamamos dentro de um paragrafo,por exemplo:
<p>{texto}</p

*/

//------------------------------------------
// AS TAGS SÃO:

/*

self closing tags
Exemplo:

<evento />

*/
//--------------------------------------------------
// INICIANDO UM PROJETO REACT 

/*
° No terminal, entre na pasta que você quer o app, depois:

dê um:
npx create-react-app nome-do-app

depois de criar o app
dê um cd na pasta que foi criado
depois dê um npm run start, ele abre o app no navegador

*/

//--------------------------------------------------
/*
DOM (DOCUMENT OBJECT MODEL)

Para o javaScript poder interagir com Html, precisa do dom
Após o navegador ler e renderizar o seu html, ele cria um conjunto de comandos que podem acessar, alterar ou criar os elementos do seu site, junto com seus valores


Problemas dessa abordagem:
○ Funções disponíveis difíceis de manipular
○ Dev precisa de preocupar com muitas coisas
○ Toda vez que um dado é alterado, o DOM precisa 
ser atualizado: é difícil manter a consistência

//--------------------------------------------------
EVENTOS
 
chamamos de evento um processo em que o status ou valor de um elemento HTML é alterado


exemplos de enventos:

usuário clica em algum elemento 
usuário insere um valor em uma tag input 
usuário clica na tecla "enter" do teclado


EVENTOS MAIS COMUNS

onChange: um elemento ou seu valor foram alterados
onClick: um usuário cliclou no elemento
onMouseOver: usuário posicionou o mouse em cima do elemetno
onMouseOut: usuário tirou o mouse do elemento

//--------------------------------------------------

BIBLIOTECA

surgiram diversas bibliotecas para facilitar o processo de desenvolvimento
uma biblioteca é um conjunto de funçõescom um determinado propósito
Escondem código complexo atrás de código amigável

//--------------------------------------------------
COMPONENTIZAÇÃO

O React permite de forma muito simples quebrar o 
código em componentes
Componentes são blocos de código que podem ser 
nomeados e reutilizados (como funções)
Podem receber propriedades de outros 
componentes

//--------------------------------------------------
NODE

Para desenvolver com React, precisamos usar um 
programa chamado Node
Ele nos dá ferramentas para instalar, rodar, gerar 
builds e deployar nossas aplicações

//--------------------------------------------------
APP.JS

Arquivo que contém o componente principal da 
aplicação
Essencialmente, é o “pai” de todo o site
 Por um tempo vamos trabalhar com um único 
componente e, portanto, somente nesse arquivo


//--------------------------------------------------
DEPLOY

Quando fazemos um site (ou qualquer outro 
programa), queremos que o mundo possa acessá-lo 
pela internet
Subir um programa para a internet é o que 
chamamos de deploy
Vocês já conhecem uma ferramenta que faz isso, o 

//--------------------------------------------------
BUILD


Para fazer o deploy de um site React, é necessário 
gerar um build antes
Um build é uma versão estática da aplicação, que 
não precisa do comando npm run start para rodar
O código gerado é ilegível, e serve apenas pro deploy
Para gerar o build, usamos: npm run build

//--------------------------------------------------
SURGE

Para fazer o deploy, vamos usar o Surge
Para instalá-lo, rode: npm install -g surge
Para fazer o deploy, rode (na pasta raiz do projeto, depois
de fazer o build): surge ./build
Para apagar um dominio do surge usamos o comando: surge teardown name-domain.surge.sh 


//--------------------------------------------------
*/







