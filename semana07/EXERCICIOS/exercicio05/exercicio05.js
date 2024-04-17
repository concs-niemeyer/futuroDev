/*
Crie um método chamado de MostrarEstoque() dentro da classe Produto.
Este método deve exibir uma mensagem parecida com a seguinte:
“O produto CANETA BIC AZUL possui 5 unidades disponíveis”

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
    vender(novaQuantidade) {
       novaQuantidade = parseInt(prompt("Digite a quantidade de itens necessária. "))
      
        if (this.quantidade >= novaQuantidade) {
            this.quantidade -= novaQuantidade
            console.log("A quantidade de itens no estoque é de ", this.quantidade)
        }   else {
                return console.log("Estoque insuficiente")
            }
    }
    repor(reporQuantidade) {
        reporQuantidade = parseInt(prompt("Digite a quantidade de itens para reposição. "))
        this.quantidade += reporQuantidade
        console.log("A quantidade de itens no estoque é de ", this.quantidade)
    }
    mostrarEstoque(){
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis.`)
    }
}
let produto = new Produto ("Camiseta", "49.99", "35");
console.log(produto)
produto.vender()
console.log(produto)
produto.repor()
produto.mostrarEstoque()