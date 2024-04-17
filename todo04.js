/* Você precisa transpor a Matriz. Precisa haver uma saída onde cada subarray seja a coluna do array principal. Exemplo de saída no final do arquivo */

function transporMatriz(matriz) {
  const transposta = []

  for (i = 0; i < matriz.length; i++) {
    const arrayAtual = []
      //console.log(i + " Primeiro valor de cada matriz: " + matriz[i][0] + " 0")
      //console.log(i + " Segundo valor de cada matriz: " + matriz[i][1] + " 1")
      //console.log(i + " Terceiro valor de cada matriz: " + matriz[i][2] + " 2")
      for (j = 0; j < matriz.length; j++) {
        //console.log(`i: ${i} - j: ${j}`)
        console.log(`${j + 1} Valor da Matriz ${i + 1}: ${matriz[j][i]} | j:${j}, i:${i}`)
        arrayAtual.push(matriz[j][i])
      }

      transposta.push(arrayAtual)
  }

  return transposta
}

// Exemplo de uso:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(transporMatriz(matriz)); // Saída: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]