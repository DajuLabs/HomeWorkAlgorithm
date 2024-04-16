/* Você precisa verificar se os array são um palíndromo */

function ehPalindromo(array) {
  for (var i = 0; i < array.length / 2; i++) {
    if (array[i] != array[array.length - i - 1]) {
      return false
    }
  }
  return true
}

// Exemplo de uso:
const array1 = [1, 2, 3, 2, 1]
const array2 = [1, 2, 3, 4, 5]
console.log(
  'O array 1 ' + (ehPalindromo(array1) ? 'é' : 'não é') + ' palíndromo.'
) // Saída: O array 1 é palíndromo.
console.log(
  'O array 2 ' + (ehPalindromo(array2) ? 'é' : 'não é') + ' palíndromo.'
) // Saída: O array 2 não é palíndromo.
