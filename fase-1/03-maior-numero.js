function maiorNumero (numeros) {
    let maior = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
    
}

console.log(maiorNumero([3, 7, 2, 9, 4]));
console.log(maiorNumero([10]));
console.log(maiorNumero([-5, -2, -8]));