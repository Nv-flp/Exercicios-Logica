function somaPares(numeros) {
    let resultado = 0 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
          resultado = resultado + numeros[i];

        } 
    }
    return resultado;
}
console.log(somaPares([2, 2, 4, 4, 5, 6]));