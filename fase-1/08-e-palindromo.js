function ePalindromo (texto) {
    let resultado = ""
    for (let i = texto.length - 1; i >= 0; i--){
        let letra = texto[i];
        resultado = resultado + letra;
    }

    return resultado === texto;
}

console.log(ePalindromo("banana"));
console.log(ePalindromo("casa"));
console.log(ePalindromo("arara"));