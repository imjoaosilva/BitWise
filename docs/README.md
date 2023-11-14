# Bitwise em JavaScript

Este projeto tem como objetivo fornecer recursos educacionais sobre operações bitwise em JavaScript. Explore os exemplos práticos e conceitos fundamentais para entender como bitwise pode ser aplicado em desenvolvimento.

## O que é um bit?

Um bit é a unidade fundamental de informação em computadores e representa o menor elemento de dados em um sistema digital.

## Valor de um bit

O valor de um bit pode variar de `0` e `1`.

## O que é um binario?

Um binário é um conjunto de bits. Podemos dizer que o binário com 4 bits `0010` é 2 

## Décimal para Binário

Existem várias formas para converter um décimal para um binário mas em baixo deixo algumas técnicas para facilitar.

- **Primeira Técnica**

Vamos começar por um número simples por exemplo **1**

**1÷2** que vai ter **1** como resto e **0** como quociente.

Com o cálculo acima podemos afirmar que o resto é a representação binária. Em um binário de 4 bits podemos dizer que o decimal 1 representa-se com 0001.

Agora vamos tentar o número 13.

**13/2** que vai ter **1** como resto e **6** como quociente.

**6/2** que vai ter **0** como resto e **3** como quociente.

**3/2** que vai ter **1** como resto e **1** como quociente.

**1/2** que vai ter 1 como resto e 0 como quociente.

Então o decimal de 13 em um binário de 4 bits seria **1101**

- **Segunda Técnica**

`256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1`

Pegando os exemplos dos números da primeira técnica vamos começar pelo numero **1**.

Pegamos a lista de números acima e somamos os números que se encontram até obter o décimal.

No caso do 1 apenas iremos precisar de 1 então coloquei um (1) no 1. Então em um binário de 4 bits podemos dizer que o décimal de 1 representa-se com 0001

`256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1(1)`

Agora pegando o número 13

`256 | 128 | 64 | 32 | 16 | 8(8) | 4(12) | 2 | 1(1)`


Seguindo esta lógica conseguimos somar até completar **13** (8+4+1)

Então a ordem seria  `1101` tendo em conta que onde não foi preciso somar colocamos 0


## Operadores

| Nome   | OR | AND  | XOR | NOT | Left Shift | Right Shift |
| ------ | --------- | --------- | --------- | --------- | --------- | --------- |
| Símbolo | `\|`      | `&`       | `^`       | `~`       | `<<`     | `>>`      |

## OR

O operador OR é representado pelo símbolo `|` e é usado para comparar dois valores binários. Se um dos valores for 1, o resultado será 1. Se ambos os valores forem 0, o resultado será 0.

### Exemplo

```js
let num1 = 1; // 0001
let num2 = 10; // 1010

/*
    0 0 0 1
    1 0 1 0

    1 0 1 1
*/

let result = num1 | num2;

console.log(result); // 11 (1011)
```


## AND

O operador AND é representado pelo símbolo `&` e é usado para comparar dois valores binários. Se ambos os valores forem 1, o resultado será 1. Se um dos valores for 0, o resultado será 0.

### Exemplo

```js
    let num1 = 1; // 0001
    let num2 = 10; // 1010

    let all = num1 | num2; // 11 (1011)

    /*
        0 0 0 1
        1 0 1 1

        0 0 0 1
    */

    let result = all & num1; // 1 (0001)

    if (result) {
        console.log('O número 1 está presente'); // este escopo será executado
    }
```


## XOR

O operador XOR é representado pelo símbolo `^` e é usado para comparar dois valores binários. Se ambos os valores forem 1 ou 0, o resultado será 0. Se um dos valores for 1 e o outro 0, o resultado será 1.

### Exemplo

```js
    let num1 = 1; // 0001
    let num2 = 10; // 1010

    /*
        0 0 0 1
        1 0 1 0

        1 0 1 1
    */

    let result = num1 ^ num2; // 11 (1011)

    console.log(result); // 11 (1011)
```

## NOT

O operador NOT é representado pelo símbolo `~` e é usado para inverter o valor de um binário. Se o valor for 1, o resultado será 0. Se o valor for 0, o resultado será 1.

### Exemplo
    
```js
    let num1 = 1; // 0001

    /*
        0 0 0 1

        1 1 1 0
    */

    let result = ~num1;

    console.log(result); // 14 (1110)
```

## Left Shift

O operador Left Shift é representado pelo símbolo `<<` e é usado para mover os bits para a esquerda. O valor do bit mais à esquerda é descartado e um 0 é adicionado à direita. O valor do bit mais à direita é descartado.

### Exemplo
    
```js
    let num1 = 1; // 0001

    /*
        0 0 0 1

        0 0 1 0
    */

    let result = num1 << 1;

    console.log(result); // 2 (0010)
```

## Right Shift

O operador Right Shift é representado pelo símbolo `>>` e é usado para mover os bits para a direita. O valor do bit mais à direita é descartado e um 0 é adicionado à esquerda. O valor do bit mais à esquerda é descartado.

### Exemplo

```js
    let num1 = 1; // 0001

    /*
        0 0 0 1

        0 0 0 0
    */

    let result = num1 >> 1;

    console.log(result); // 0 (0000)
```

## Exemplos práticos

Os exemplos estão na pasta [examples](../examples)

## Contribuir

Se você quiser contribuir com este projeto, leia o [CONTRIBUTING.md](CONTRIBUTING.md) para obter detalhes sobre o nosso código de conduta e o processo de envio de solicitações pull para nós.
