<?php
/* Você precisa verificar se os array são um palíndromo */

function ehPalindromo($array) {
  //implemente aqui sua lógica
  return true;
}

// Exemplo de uso:
$array1 = [1, 2, 3, 2, 1];
$array2 = [1, 2, 3, 4, 5];
echo "O array 1 " . (ehPalindromo($array1) ? "é" : "não é") . " palíndromo.<br>"; // Saída: O array 1 é palíndromo.
echo "O array 2 " . (ehPalindromo($array2) ? "é" : "não é") . " palíndromo."; // Saída: O array 2 não é palíndromo.


?>