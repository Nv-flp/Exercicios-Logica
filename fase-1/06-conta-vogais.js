function contaVogais (palavras) {
    let resultado = 0;

    for (let i = 0; i < palavras.length; i++) {
         let letra = palavras[i];
            if (letra === "a" || letra === "e" || letra === "o" || letra === "u" || letra === "i") {
                 resultado = resultado + 1;
            }
    }

    return resultado;
}

console.log(contaVogais("banana"));
console.log(contaVogais("javascript"));
console.log(contaVogais("xyz"));