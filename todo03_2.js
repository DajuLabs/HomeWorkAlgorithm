/*
  Você precisa ordenar o array por soma. veja o semplo abaixo na //Saída:
*/

function ordenarPorSoma(matriz) {
    let matrizOrdenada = []
    for (i = 0; i < matriz.length; i++) {
        let maior = 0;
        let menor = 1000;
        let meio;
        for (j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                console.log(`Matriz ${i + 1} - Comparando Maior ${matriz[i][j]} com ${maior}`)
                console.log(`Maior: ${matriz[i][j]}`)
                maior = matriz[i][j]
            }

            if (matriz[i][j] < menor) {
                console.log(`Matriz ${i + 1} - Comparando Menor ${matriz[i][j]} com ${menor}`)
                console.log(`Menor: ${matriz[i][j]}`)
                menor = matriz[i][j]
            }
            
            console.log(`Maior: ${maior}, Menor ${menor}, Valor Atual ${matriz[i][j]}`)

            if (matriz[i][j] < maior && matriz[i][j] > menor) {
                console.log(`Matriz ${i + 1} - Comparando Meio ${maior} com ${matriz[i][j]} e com ${maior}`)
                console.log(`Meio: ${matriz[i][j]}`)
                meio = matriz[i][j]
            }
        }
        matrizOrdenada.push([menor, meio, maior])
    }
    return matrizOrdenada
  }
  
  
  // Exemplo de uso:
  const matriz = [
    [3, 1, 2],
    [4, 6, 5],
    [8, 7, 9]
  ];
  console.log(ordenarPorSoma(matriz)); // Saída: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  
  //console.log(`Números na Matriz: ${matriz[0][0]}, ${matriz[0][1]}, ${matriz[0][2]}`);