function somaPares (numeros) {
    let resultado = 0;
    for ( let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0){
            resultado = resultado + numeros[i];
        }
    }

    return resultado;
}

console.log(somaPares([1, 4, 6, 3, 10]));
