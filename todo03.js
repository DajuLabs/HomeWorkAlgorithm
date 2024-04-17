function ordenarPorSoma(matriz) {
  //implemente sua lógica aqui
  const arrayOrdenado = matriz.map((array) => array.sort((a, b) => a - b))
  return arrayOrdenado
}

// Exemplo de uso:
const matriz = [
  [3, 1, 2],
  [6, 5, 4],
  [9, 7, 8]
];
console.log(ordenarPorSoma(matriz)); // Saída: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]