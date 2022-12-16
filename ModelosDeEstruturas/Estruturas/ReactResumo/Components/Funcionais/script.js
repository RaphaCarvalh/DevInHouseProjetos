//COMPONENTES FUNCIONAIS

//-------------------------------------------------------------
/*
Componentes são blocos de código reutilizáveis

● Esses blocos representam um pedaço de 
● interface, “gerando” o HTML que aparece na página
● Não existe uma regra de quando componentizar uma parte da tela

*/

//-------------------------------------------------------------
/*

// Devemos considerar criar um componente quando:

● Layout tiver muitas partes repetidas
● Código estiver/for muito grande e/ou confuso
● Queremos dar um nome significativo à uma parte da interface

*/

//-------------------------------------------------------------
/*

// O QUE DEVE SER UM COMPONENTE? 

Na prática, componentes em React são funções (por enquanto) com algumas regras específicas:
● Primeira letra do nome maiúscula
● Deve retornar um JSX (com um único pai) 
● Na prática, componentes em React são funções
● Para colocar o componente na tela, chamamos ele em um componente pai, dentro do nosso JSX
● Quando colocamos um componente A dentro de um componente B, falamos que o componente A é filho do componente B

*/

//-------------------------------------------------------------

//IMPORTANTE
//Lembrando que o componente App.js, criado por padrão quando criamos um app React, é o pai de todos os outros componentes

//-------------------------------------------------------------
/*

● Para chamar o componente, usamos uma sintaxe semelhante à do HTML
● Nome deve ser mantido, com a letra maiúscula
*/

//-------------------------------------------------------------

// EXEMPLO DE BOAS PRÁTICAS SIMPLES/BÁSICO:

/*
● Quando um componente não possui nada entre a abertura e o fechamento de sua tag, é preferível que se use a sintaxe self-closing
● É permitido ter mais de um componente em um mesmo arquivo (afinal, eles são só funções), No entanto, é uma boa prática criar um arquivo por componente

//-------------------------------------------------------------
//EXPORT/IMPORT

● Podemos comunicar os arquivos por meio de imports e exports
● Todo arquivo que possui um componente deve importar o React no topo
● Precisamos importá-lo no arquivo onde o usamos
● Fazemos isso por meio da palavra import, Atenção para as {chaves} em volta do nome do componente
● Devemos exportar o componente (antes do nome) Criando um Componente Separado 


● Exportar: export ou export default

● Importar:
● import {MeuComponente} from './path’
● import MeuComponente from './path’ (no caso do export default)

//-------------------------------------------------------------

//SEPARANDO EM ARQUIVOS

● O arquivo deve ter o mesmo nome do componente que ele guarda
● A organização de pastas é livre, mas recomenda-se a criação de uma pasta chamada components, que guarde todos os componentes criados
● Essa pasta pode ter subpastas, de acordo com o que fizer mais sentido para cada um :)

//-------------------------------------------------------------

//PROPS

● Componentes pais podem passar propriedades para os componentes filhos
● Chamamos essas propriedades de props
● Elas podem assumir qualquer tipo de valor que vimos em Javascript (Strings, números, arrays, objetos, funções, componentes, etc...)


● A sintaxe é a mesma dos atributos HTML
● Damos um nome arbitrário
● Passamos o valor entre {chaves}


● Quando um componente filho recebe props, temos um argumento na função que o define
● Esse argumento é um objeto chamado props e contém informações passadas pelo componente pai
● O valor passado pelo pai está disponível dentro do objeto e pode ser acessado pelo nome da props passada


Regra Importante ⚠
● Componentes filhos não podem nunca alterar o objeto de props

*/
