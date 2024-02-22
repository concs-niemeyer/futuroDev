/*
Crie um array chamado frutas contendo três frutas diferentes.Em seguida, imprima no console a segunda fruta do array.
Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.
*/

const prompt = require("prompt-sync")();

const frutas = ["Banana","Abacate", "Morango"]
console.log('A segunda fruta do array é ',frutas[1])

//DESAFIO//
const novasFrutas = []
for (let i = 0; i < 3; i++) {
    let fruta = prompt('Digite uma fruta: ')
    novasFrutas.push(fruta)
}
console.log('A segunda fruta digitada foi ',novasFrutas[1])