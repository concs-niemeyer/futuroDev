/*
Crie um array chamado numeros contendo cinco números inteiros.
Utilize um loop for para imprimir cada número do array no console.
Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.
*/

const prompt = require ("prompt-sync")()

const numeros = [8, 2, 4, 5, 10]
// loop for para imprimir cada numero do array no console
for ( let numero of numeros) {
    console.log(numero)
}
// DESAFIO
const arrayEscolhido = []
const mensagem1 = "Escolha um número para adicionar ao array. "
const mensagem2 = "Número adicionado!"

for (let i = 0; i < 5; i ++) {
    novoNumero = arrayEscolhido.push(prompt(mensagem1))
    console.log(mensagem2)
} console.log("O array que escolhido foi ", arrayEscolhido)