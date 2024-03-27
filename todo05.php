<?php
/* Você precisa encontrar o maior e menor dentro do array sugerido */

function encontrarMaiorMenor($array) {
  $maior = $array[0];
  $menor = $array[0];
    foreach($array as $valor){
      if($valor < $menor){
        $menor = $valor;
      } 
      if($valor > $maior){
        $maior = $valor;
      }
    }
  return ["maior" => $maior, "menor" => $menor];
}

// Exemplo de uso:
$array = [5, 2, 9, 1, 7];
$resultado = encontrarMaiorMenor($array);
echo "Maior elemento: " . $resultado['maior'] . "<br>"; // Saída: Maior elemento: 9
echo "Menor elemento: " . $resultado['menor']; // Saída: Menor elemento: 1


?>