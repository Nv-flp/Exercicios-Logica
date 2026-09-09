
function contaMaiores (numeros, limite) {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > limite){
            resultado = resultado + 1;
        }
    }

    return resultado;
}

console.log(contaMaiores([1, 4, 6, 8, 3], 4))