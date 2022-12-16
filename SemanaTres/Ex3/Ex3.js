console.log('[M1S03] Ex 3 - Concatenar Spread');

const concatena = (array1, array2) => {
    arrayCombinado = [...array1, ...array2];
    console.log('Array1',array1);
    console.log('Array2',array2);
    return arrayCombinado
    }
    
    const novoArray = concatena([1, 2, 3], [4, 5, 6]);
    console.log('novoArray',novoArray);