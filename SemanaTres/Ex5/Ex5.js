console.log("[M1S03] Ex 5 - Parâmetros Infinitos");

// function somaTudo(...numeros) {
    const somaTudo = (...numeros) => {
        let total = 0;
        
        numeros.forEach((num) => {
          total += num;
        });
        
        return total;
      }
      
      const resultado = somaTudo(1, 2, 3, 4);
      
      console.log(resultado);
      // resultado deve ser 10