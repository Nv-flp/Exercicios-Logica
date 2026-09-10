# Exercícios de Lógica

Exercícios de lógica em JavaScript, resolvidos manualmente, sem métodos
prontos de array. Objetivo: consolidar fundamentos antes de partir para
abstrações.

Executar: `node fase-1/01-soma-pares.js`

## Fase 1 — Variáveis, condicionais e loops

| # | Exercício | Conceitos |
|---|---|---|
| 01 | Soma dos números pares | `for`, `if`, `%`, acumulador numérico |
| 02 | Conta números maiores que um limite | dois parâmetros, contador, `>` |
| 03 | Maior número do array | troca vs. acumulação, valor inicial `numeros[0]` |
| 04 | Média dos números | soma + divisão, `.length` como quantidade |
| 05 | Soma de 1 até N | `i` como valor (não posição), `<=` |
| 06 | Conta vogais | string com índice, operador `\|\|` |
| 07 | Inverte texto | acumulador de texto `""`, `for` decrescente |
| 08 | Verifica palíndromo | retorno booleano, `===` sem `if` |
| 09 | Filtra pares em novo array | acumulador `[]`, `push` |
| 10 | Conta ocorrências de um valor | `===` com número e texto |

## Referência

### Tipos de acumulador

| Objetivo | Inicia com | Como adiciona |
|---|---|---|
| Somar valores | `0` | `resultado = resultado + x` |
| Multiplicar | `1` | `resultado = resultado * x` |
| Montar texto | `""` | `resultado = resultado + x` |
| Montar array | `[]` | `resultado.push(x)` |
| Contar ocorrências | `0` | `resultado = resultado + 1` |
| Guardar campeão | `array[0]` | `resultado = array[i]` (troca) |

### As três partes do `for`

```js
for (let i = 0; i < n; i++)
//      ①        ②      ③
```

- ① roda uma vez, antes de tudo
- ② testada antes de cada volta, inclusive a primeira
- ③ roda depois de cada volta

Decrescente: `for (let i = n - 1; i >= 0; i--)`

### Posição vs. valor

| Escrita | Significa |
|---|---|
| `i` | a posição |
| `array[i]` | o valor naquela posição |
| `array.length` | quantos itens existem |

Última posição = `length - 1`, porque a contagem começa em 0.

### Operadores

| | |
|---|---|
| `=` | atribui |
| `===` | compara (produz `true`/`false`) |
| `%` | resto da divisão — `x % 2 === 0` é par |
| `\|\|` | ou — verdadeiro se qualquer lado for |
| `i++` | atalho para `i = i + 1` |

### Regras aprendidas na prática

- Parâmetro vem de fora; variável interna a função cria para si
- Toda variável nova nasce com `let`
- `return` dentro do `for` encerra na primeira volta
- Array vazio: o `for` roda zero vezes, a condição já começa falsa
- Sempre usar chaves `{ }`, mesmo com uma linha só
- Rodar sem erro não significa estar certo — conferir o valor