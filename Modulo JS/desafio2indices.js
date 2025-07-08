// 2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor. 

function encontrarIndices(array) {
    if (array.length === 0) return null;

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}


const numeros = [10, 3, 25, 8, -4, 20];
const { indiceMaior, indiceMenor } = encontrarIndices(numeros);
console.log("Array:", numeros);
console.log("Índice do maior valor:", indiceMaior);
console.log("Índice do menor valor:", indiceMenor);