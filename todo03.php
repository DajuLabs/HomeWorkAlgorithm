<?php
/*
  Você precisa ordenar o array por soma. veja o semplo abaixo na //Saída:
*/


function ordenarPorSoma($matriz) {
  for ($row = 0; $row < count($matriz); $row++) { 
    sort($matriz[$row]);
    for ($col = 0; $col < count($matriz[$row]); $col++) { 
      $matriz[$row][$col];
    }
  }
     return $matriz;
}

// Exemplo de uso:
$matriz = [
  [3, 1, 2],
  [6, 5, 4],
  [9, 7, 8]
];
print_r(ordenarPorSoma($matriz)); // Saída: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


?>