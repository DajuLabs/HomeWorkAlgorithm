/* Você precisa verificar se os array são um palíndromo */

function ehPalindromo(array) {
  //implemente aqui sua lógica
  for (i = 0; i < array.length; i++) {
    const length = array.length - 1
    if (array[i] === array[length - i]) {
      return true;
    } else {
      return false;
    }
  }

}

// Exemplo de uso:
const array1 = [1, 2, 3, 2, 1];
const array2 = [1, 2, 3, 4, 5];
console.log("O array 1 " + (ehPalindromo(array1) ? "é" : "não é") + " palíndromo."); // Saída: O array 1 é palíndromo.
console.log("O array 2 " + (ehPalindromo(array2) ? "é" : "não é") + " palíndromo."); // Saída: O array 2 não é palíndromo.
