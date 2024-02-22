/*Você foi contratado por um supermercado para catalogar a compra de uma cliente.
Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, só serão aceitas as seguintes respostas:

(1)Hortifruti
(2)Laticínios
(3)Carnes
(4)Peixes
(5)Aves
(6)Fechar pedido
Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.

Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.

Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.*/
// by_c0ncs_
const prompt = require('prompt-sync')();


const pedido = ['Hortifruti', 'Laticínios', 'Carnes', 'Peixes', 'Aves']     // array com as opções dos pedidos
const produtos = [0, 0, 0, 0, 0]    // array com a quantidade de produtos escolhidos
const mensagemPrompt = 'Qual produto deseja escolher? (1)Hortifruti, (2)Laticínios, (3)Carnes, (4)Peixes, (5)Aves, (6)Fechar pedido: '
const comprarProdutos = true

let opcao = prompt(mensagemPrompt)

function encontrarIndiceDoMaiorValor(array) {
    
    let maiorValor = array[0];
    let indiceMaiorValor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i];
            indiceMaiorValor = i;
        }
    }    
    return pedido[indiceMaiorValor];
}




do {
    if (opcao == 1) {
        console.log('Você escolheu a opção 1')
        produtos[0] = prompt('Insira a quantidade de Hortifruti desejada: ')
        opcao = ''
        }   else if (opcao == 2 ) {
                console.log('Você escolheu a opção 2')
                produtos[1] = prompt('Insira a quantidade de Laticínios desejada: ')
                opcao = ''
                }   else if (opcao == 3 ) {
                        console.log('Você escolheu a opção 3')
                        produtos[2] = prompt('Insira a quantidade de Carnes desejada: ')
                        opcao = ''
                        }   else if (opcao == 4 ) {
                                console.log('Você escolheu a opção 4')
                                produtos[3] = prompt('Insira a quantidade de Peixes desejada: ')
                                opcao = ''
                            }   else if (opcao == 5 ) {
                                    console.log('Você escolheu a opção 5')
                                    produtos[4] = prompt('Insira a quantidade de Aves desejada: ')
                                    opcao = ''
                                }   else if (opcao == 6) {
                                        console.log('Você fechou seu pedido!')
                                        produtoTop = encontrarIndiceDoMaiorValor(produtos)
                                        quantidade = produtos.sort(function(a, b){return b - a})
                                        unidadesTop = quantidade[0]
                                        console.log(`O produto em maior quantidade é o ${produtoTop} com ${unidadesTop} unidades`)
                                        break                                           
                                    }   else if (opcao == '') {
                                            opcao = prompt(mensagemPrompt)
                                        }   else {
                                                console.log('Insira uma opção válida')
                                            }
}   while (comprarProdutos == true) 