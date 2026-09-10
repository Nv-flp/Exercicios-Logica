function contaRepetidos (numeros, repetidos) {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros [i] === repetidos) {
            resultado = resultado + 1;
        }
    }
    return resultado;
}

console.log(contaRepetidos([1, 2, 3, 4, 2, 3, 5], 2));
console.log(contaRepetidos(["a", "b", "a"], "a"));