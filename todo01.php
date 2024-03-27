<?php
/* Você precisa somar os elementos do array e obter uma soma como saída na função. */

function elementoExiste($array, $valor) {
  $soma = 0;
  for ($row = 0; $row < count($array); $row++) {
    for ($col = 0; $col < count($array[$row]); $col++) { 
        $soma += $array[$row][$col];
    }
}
  return $soma;
}

// Exemplo de uso:
$matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
var_dump(elementoExiste($matriz, 5)); // Saída: bool(true)
var_dump(elementoExiste($matriz, 10)); // Saída: bool(false)
?>