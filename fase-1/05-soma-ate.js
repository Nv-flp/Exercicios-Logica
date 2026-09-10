function somaAte (n) {
    let resultado = 0;
    for(let i = 1; i <= n; i++) {
        resultado = resultado + i;
    }
    return resultado;
}
console.log(somaAte(5));
console.log(somaAte(1));
console.log(somaAte(10));
