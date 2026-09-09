# Exercicios-Logica

# Exercícios de Lógica

Exercícios de lógica de programação em JavaScript, resolvidos manualmente
para consolidar fundamentos. Sem uso de métodos prontos de array nas
primeiras fases — a ideia é entender o funcionamento antes de abstrair.

Executado com Node.js:

    node fase-1/01-soma-pares.js

## Fase 1 — Variáveis, condicionais e loops

### 01 — Soma dos números pares

Recebe um array de números e devolve a soma apenas dos pares.
somaPares([1, 2, 3, 4, 5, 6]) → 12
somaPares([1, 3, 5]) → 0
somaPares([]) → 0


**Solução:** um acumulador iniciado em zero, um `for` percorrendo o array
por índice, e um `if` usando o operador `%` para identificar os pares.
Quando o resto da divisão por 2 é zero, o número é somado ao acumulador.
O `return` fica fora do loop, para que a função só devolva o valor depois
de percorrer todo o array.

**Conceitos:** `let` vs `const`, laço `for`, operador `%`, comparação
`===`, acumulador.

### 02 — Conta números maiores que um limite

Recebe um array de números e um limite, e devolve quantos números do
array são maiores que esse limite.

contaMaiores([1, 5, 8, 3, 10], 4) → 3
contaMaiores([1, 2, 3], 10) → 0
contaMaiores([], 5) → 0


**Solução:** mesma estrutura do exercício anterior, com duas diferenças.
A função recebe dois parâmetros, e o acumulador funciona como contador:
soma 1 a cada número que passa na condição, em vez de somar o valor do
número. A condição usa o operador `>` comparando o item atual com o
limite.

Com array vazio, `numeros.length` é 0 e a condição do `for` já começa
falsa, então o loop não executa nenhuma vez e a função devolve 0.

**Conceitos:** múltiplos parâmetros, contador vs. somador, operador `>`,
caso de borda com array vazio.