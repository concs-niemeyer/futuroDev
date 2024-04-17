/*
Crie uma classe chamada Produto com os seguintes atributos:
nome
preco
quantidade
 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                     
*/

class Produto {
    nome;
    preco;
    quantidade;
}

let produto = new Produto()
produto.nome = "Camiseta"
produto.preco = 49.99
produto.quantidade = 35

console.log(produto)