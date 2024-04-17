/*
Crie uma nova classe chamada de Pessoa que deve ter os seguintes atributos:
nome
idade
profissao
Esta classe deve possuir um construtor para receber os valores para cada um dos atributos.

 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                     
*/
const prompt = require("prompt-sync")()
class Pessoa {
    nome
    idade
    profissao

    constructor (nome, idade, profissao) {
        nome = prompt("Digite o seu nome. ")
        this.nome = nome
        idade = prompt("Digite a sua idade. ")
        this.idade = idade
        profissao = prompt("Digite a sua profissão. ")
        this.profissao = profissao
    }
}
let pessoa = new Pessoa()
console.log(pessoa)