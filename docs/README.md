# Languages

- **Portuguese** [PT](./pt/README.md)

# Bitwise in JavaScript

This project aims to provide educational resources on bitwise operations in JavaScript. Explore practical examples and fundamental concepts to understand how bitwise can be applied in development.

## What is a bit?

A bit is the fundamental unit of information in computers and represents the smallest data element in a digital system.

## Value of a bit

The value of a bit can vary between `0` and `1`.

## What is a binary?

A binary is a set of bits. We can say that the binary with 4 bits `0010` is 2

## Decimal to Binary

There are several ways to convert a decimal to binary, but below I leave some techniques to make it easier.

- **First Technique**

Let's start with a simple number, for example **1**

**1÷2** which will have **1** as remainder and **0** as quotient.

With the calculation above we can say that the remainder is the binary representation. In a 4-bit binary we can say that decimal 1 is represented as 0001.

Now let's try number 13.

**13/2** which will have **1** as remainder and **6** as quotient.

**6/2** which will have **0** as remainder and **3** as quotient.

**3/2** which will have **1** as remainder and **1** as quotient.

**1/2** which will have 1 as remainder and 0 as quotient.

So the decimal of 13 in a 4-bit binary would be **1101**

- **Second Technique**

`256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1`

Taking the examples of numbers from the first technique, let's start with the number **1**.

We take the list of numbers above and add the numbers together until we get the decimal.

In the case of 1 we will only need 1 so I put a (1) in 1. So in a 4-bit binary we can say that the decimal of 1 is represented by 0001

`256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1(1)`

Now taking number 13

`256 | 128 | 64 | 32 | 16 | 8(8) | 4(12) | 2 | 1(1)`


Following this logic we can add until we complete **13** (8+4+1)

So the order would be `1101` taking into account that where it was not necessary to add we put 0


## Operators

| Name | OR | AND | XOR | NOT | Left Shift | Right Shift |
| ------ | --------- | --------- | --------- | --------- | --------- | --------- |
| Symbol | `\|` | `&` | `^` | `~` | `<<` | `>>` |

## OR

The OR operator is represented by the symbol `|` and is used to compare two binary values. If either value is 1, the result is 1. If both values are 0, the result is 0.

### Example

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


##AND

The AND operator is represented by the symbol `&` and is used to compare two binary values. If both values are 1, the result is 1. If either value is 0, the result is 0.

### Example

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
         console.log('Number 1 is present'); // this scope will be executed
     }
```


##XOR

The XOR operator is represented by the symbol `^` and is used to compare two binary values. If both values are 1 or 0, the result is 0. If one of the values is 1 and the other 0, the result is 1.

### Example

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

##NOT

The NOT operator is represented by the symbol `~` and is used to invert the value of a binary. If the value is 1, the result will be 0. If the value is 0, the result will be 1.

### Example
    
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

The Left Shift operator is represented by the symbol `<<` and is used to move bits to the left. The value of the leftmost bit is discarded and a 0 is added to the right. The value of the rightmost bit is discarded.

### Example
    
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

The Right Shift operator is represented by the symbol `>>` and is used to move bits to the right. The value of the rightmost bit is discarded and a 0 is added to the left. The value of the leftmost bit is discarded.

### Example

```js
     let num1 = 1; // 0001

     /*
         0 0 0 1

         0 0 0 0
     */

     let result = num1 >> 1;

     console.log(result); // 0 (0000)
```

## Practical examples

The examples are in the folder [examples](../examples)

## Contribute

If you would like to contribute to this project, please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and process