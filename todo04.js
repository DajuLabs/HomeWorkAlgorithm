/* Você precisa transpor a Matriz. Precisa haver uma saída onde cada subarray seja a coluna do array principal. Exemplo de saída no final do arquivo */

function transporMatriz(matriz) {
  const transposta = []

  for (let i = 0; i < matriz[0].length; i++) {
    const coluna = []
    for (let j = 0; j < matriz.length; j++) {
      coluna.push(matriz[j][i])
    }
    transposta.push(coluna)
  }
  return transposta
}

// Exemplo de uso:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(transporMatriz(matriz)) // Saída: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
