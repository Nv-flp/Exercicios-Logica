function inverterTexto (texto) {
    let resultado = ""

    for (let i = texto.length - 1; i >= 0; i--) {
        let letra = texto[i];
        resultado = resultado + letra;
        
    }
    return resultado;
}

console.log(inverterTexto("banana"))