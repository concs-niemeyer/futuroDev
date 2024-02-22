/*
Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores.
Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.
*/

const numeros = [8, 2, 4, 5, 10]

const pares = numeros.filter(numero => numero % 2 === 0)

console.log(pares)