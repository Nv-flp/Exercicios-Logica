function filtraPares(pares) {
  let resultado = [];

  for (let i = 0; i < pares.length; i++) {
    if (pares[i] % 2 === 0) {
      resultado.push(pares[i]);
    }
  }

  return resultado;
}

console.log(filtraPares([1, 2, 3, 4, 5, 6]));