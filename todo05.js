/* Você precisa encontrar o maior e menor dentro do array sugerido */


function encontrarMaiorMenor(array) {
  let maior = array[0];
  let menor = array[0];

  //implemente aqui sua lógica

  return {maior: maior, menor: menor};
}

// Exemplo de uso:
const array = [5, 2, 9, 1, 7];
const resultado = encontrarMaiorMenor(array);
console.log("Maior elemento: " + resultado.maior); // Saída: Maior elemento: 9
console.log("Menor elemento: " + resultado.menor); // Saída: Menor elemento: 1
