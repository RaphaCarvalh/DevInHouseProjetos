console.log("[M1S03] Ex 4 - Mesclando Objetos");

const mesclaObjetos = (objUm, objDois) => ({ ...objUm, ...objDois });


const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

const Objeto = mesclaObjetos(objUm, objDois);

console.log(Objeto);

// { a: 1, b: 2, c: 3, d: 4 }



