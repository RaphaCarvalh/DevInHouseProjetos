var soma = 0

do {
    var numero = parseInt(prompt("Entre com um valor qualquer"));
  
    if (numero === null) {
      break;
    }

    numero = parseInt(numero);

    if (isNaN(numero) || numero === -1) {
      continue;
    }
  
    soma = soma + numero;
  } while (numero !== -1);
  
  alert(soma);