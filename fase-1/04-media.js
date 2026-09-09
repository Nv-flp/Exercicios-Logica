function media (numeros){
    let soma = 0;
    for (let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i];
    }
return soma / numeros.length;
}

console.log(media([2, 4, 6]));
console.log(media([10, 20]));
console.log(media([5]));