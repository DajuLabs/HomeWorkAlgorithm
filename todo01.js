/* Você precisa somar os elementos do array e obter uma soma como saída na função. */

function somaElementos(array) {
  let soma = 0;

  for (i = 0; i < array.length; i++) {
    //console.log(array[i])
    for (j = 0; j < array[i].length; j++) {
      //console.log(array[i][j])
      soma += array[i][j]
    }
  }

  return soma;
}

// Exemplo de uso:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(somaElementos(matriz)); // Saída: 45