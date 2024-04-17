/*
Crie um construtor para a classe Produto que permita receber os valores base para cada um dos parâmetros.

 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                     
*/
const prompt = require("prompt-sync")()

class Produto {
    nome;
    preco;
    quantidade;

    constructor (nome, preco, quantidade) {
        this.nome = nome
        this. preco = preco
        this.quantidade = quantidade
    }
}
const nomePrompt = prompt("Digite o nome do produto. ")
const precoPrompt = prompt("Digite o preço do produto. ")
const quantidadePrompt = prompt("Digite a quantidade do produto. ")

let produto = new Produto(nomePrompt, precoPrompt, quantidadePrompt)

console.log(produto)