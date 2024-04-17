/*
Crie um método para a classe Produto chamado de Vender().
Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do produto.
Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade disponível.
Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.

 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                     
*/
const prompt = require("prompt-sync")()

class Produto {
    nome;
    preco;
    quantidade;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = parseFloat(preco);
        this.quantidade = parseInt(quantidade);
    }
    Vender(novaQuantidade) {
       novaQuantidade = parseInt(prompt("Digite a quantidade de itens necessária. "))
      
        if (this.quantidade >= novaQuantidade) {
            this.quantidade -= novaQuantidade
            console.log("A quantidade de itens no estoque é de ", this.quantidade)
        }   else {
                return console.log("Estoque insuficiente")
            }
    }
}
let produto = new Produto ("Camiseta", "49.99", "35");
console.log(produto)
produto.vender()
console.log(produto)