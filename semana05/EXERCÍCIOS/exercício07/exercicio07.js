/*
Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console.
Use o método map para realizar a criação de um novo array.
*/

const numeros = [8, 2, 4, 5, 10]

const quadrados = numeros.map( numero => numero **2)

console.log(quadrados)