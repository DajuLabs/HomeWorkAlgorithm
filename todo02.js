/* 
  Você precisa achar dentro do array o valor passado como parametro na função. 
  A saída da função precisa ser um booleano true ou false
*/

function verificaSeElementoExiste(array, valor) {
  for (var i = 0, ln = array.length; i < ln; i++) {
    for (var b = 0, len = array[i].length; b < len; b++) {
      if (array[i][b] == valor) {
        return true
      }
    }
  }

  return false
}

// Exemplo de uso:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(verificaSeElementoExiste(matriz, 5)) // Saída: true
console.log(verificaSeElementoExiste(matriz, 10)) // Saída: false
