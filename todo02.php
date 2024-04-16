<?php
/* 
  Você precisa achar dentro do array o valor passado como parametro na função. 
  A saída da função precisa ser um booleano true ou false
*/

function elementoExiste($array, $valor) {
  foreach($array as $linha){
    foreach($linha as $coluna){
      if($valor == $coluna){
        return true;
      }
    }
  }

  return false;
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