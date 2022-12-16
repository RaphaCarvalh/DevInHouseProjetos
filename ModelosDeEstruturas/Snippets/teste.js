console.log("[M1S03] Ex 1 - Use Let, Const e Array");

function procuraMinMax(numeros) {
  if (!Array.isArray(numeros) || !numeros.length) {
    console.log('Não é possível encontrar');
  } else {
    let min = numeros[0];
    let max = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] < min) {
        min = numeros[i];
      }
      if (numeros[i] > max) {
        max = numeros[i];
      }
    }

    console.log({ min, max });
  }
}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);


// teste extra
// procuraMinMax(['a', 'c', 'b']);

// // // equivalente mas com arrow function
// // const procuraMinMaxArrow = (numeros) => {
// //   if (!Array.isArray(numeros) || !numeros.length) {
// //     console.log('Não é possível encontrar');
// //   } else {
// //     let min = numeros[0];
// //     let max = numeros[0];

// //     for (let i = 0; i < numeros.length; i++) {
// //       if (numeros[i] < min) {
// //         min = numeros[i];
// //       }
// //       if (numeros[i] > max) {
// //         max = numeros[i];
// //       }
// //     }

// //     console.log({ min, max });
// //   }
// // }