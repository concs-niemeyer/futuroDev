/*
Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros.
Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.
*/

const numerosOrdenados = [8, 2, 4, 5, 10]
numerosOrdenados.sort(function(a,b){return a - b})
console.log(numerosOrdenados)