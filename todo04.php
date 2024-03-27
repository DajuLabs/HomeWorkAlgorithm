<?php
/* Você precisa transpor a Matriz. Precisa haver uma saída onde cada subarray seja a coluna do array principal. Exemplo de saída no final do arquivo */

function transporMatriz($matriz) {
    $chaves = array_keys($matriz);
    $transposta = [];


    for ($i = 0; $i < count($matriz); $i++) {
      $item = array();
      foreach($chaves as $chave){
        $item[$chave] = $matriz[$chave][$i];
      }
      $transposta[] = $item;
    }
    return $transposta;
}

// Exemplo de uso:
$matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
print_r(transporMatriz($matriz)); // Saída: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

?>