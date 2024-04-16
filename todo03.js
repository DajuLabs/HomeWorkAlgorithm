/*
  Você precisa ordenar o array por soma. veja o semplo abaixo na //Saída:
*/

function ordenarPorSoma(matriz) {
  for (var i = 0, ln = matriz.length; i < ln; i++) {
    matriz[i].sort()
    for (var b = 0, len = matriz[i].length; b < len; b++) {}
    matriz[i][b]
  }

  return matriz
}

// Exemplo de uso:
const matriz = [
  [3, 1, 2],
  [6, 5, 4],
  [9, 7, 8],
]
console.log(ordenarPorSoma(matriz)) // Saída: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
