/* 
  Você precisa achar dentro do array o valor passado como parametro na função. 
  A saída da função precisa ser um booleano true ou false
*/

function verificaSeElementoExiste(array, valor) {
  //implemente sua lógica aqui
  let arrayValues = []
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      arrayValues.push(array[i][j]);
    }
  }
  //console.log(arrayValues);
  return arrayValues.includes(valor)

}

// Exemplo de uso:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(verificaSeElementoExiste(matriz, 5)); // Saída: true
console.log(verificaSeElementoExiste(matriz, 10)); // Saída: false
