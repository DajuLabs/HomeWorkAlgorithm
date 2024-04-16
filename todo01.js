/* Você precisa somar os elementos do array e obter uma soma como saída na função. */

function somaElementos(array) {
  let soma = 0

  for (var i = 0, ln = array.length; i < ln; i++) {
    for (var b = 0, len = array[i].length; b < len; b++) {
      soma += array[i][b]
    }
  }

  return soma
}

// Exemplo de uso:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(somaElementos(matriz)) // Saída: 45
