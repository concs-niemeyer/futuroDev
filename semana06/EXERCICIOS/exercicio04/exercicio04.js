/*
Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email.
Monte essas informações em um objeto igual ao do exercício 03,
após isso salve esse objeto com a chave “user” no localStorage.
 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                       
*/
//const prompt = require("prompt-sync")();

function cadastrarUsuario() {
    let name = prompt('Digite o seu nome: ')
    let age = prompt('Digite a sua idade: ')
    let emailAdress = prompt('Digite o seu email: ')

    let usuario = {
        nome: name,
        idade: age,
        email: emailAdress
    }
    
    localStorage.setItem('user',JSON.stringify(usuario))
    return usuario
}

let dadosUsuario = cadastrarUsuario()
console.log(dadosUsuario)

// Recuperando os dados do localStorage
let dadosLocalStorage = JSON.parse(localStorage.getItem('user'));
console.log('Dados armazenados no localStorage:', dadosLocalStorage);