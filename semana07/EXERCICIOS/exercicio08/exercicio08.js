/*
Crie uma nova classe chamada de Cliente. Esta classe deve herdar a classe Pessoa.
Além disso ela deve possuir os seguintes atributos:
telefone
email
clienteDesde - deve ser uma string no formato “ANO-MES-DIA”
Crie um construtor para receber os valores para todos os atributos da classe Cliente e também da classe Pessoa, 
sendo necessário passar parâmetros para o construtor base da classe Pessoa.

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

class Cliente extends Pessoa {
    telefone
    email
    clienteDesde

    constructor (nome, idade, profissao, telefone, email, dataCadastro) {
        super(nome, idade, profissao)

        telefone = prompt("Digite seu número de telefone. ")
        this.telefone = telefone
        email = prompt("Digite seu email. ")
        this.email = email
        dataCadastro = prompt("Informe a data do seu cadastro no formato YYY-MM-DD (ano-mês-dia). ")
        dataCadastro = new Date()
        this.clienteDesde = dataCadastro

    }
}

//let pessoa = new Pessoa()
//console.log(pessoa)
let cliente = new Cliente()
console.log(cliente)
