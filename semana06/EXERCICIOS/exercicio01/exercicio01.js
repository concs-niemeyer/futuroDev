/*
Construa uma função que irá verificar se um valor passado pelo parâmetro é par.
Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”.
Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                       
*/

const prompt = require("prompt-sync")();

const promessaPar = new Promise((resolve, reject) => {
    let numero = prompt("Digite um número: ");

    // Converte a entrada para um número
    numero = parseFloat(numero);

    if (numero % 2 === 0) {
        resolve("Número validado é par");
	}	else if (isNaN(numero)) {
        reject("Erro: Por favor, digite um número válido.");
        return;
    }	else {
        reject("Erro: O número informado é ímpar");
    }
});

promessaPar
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    });

/*

function verificarParOuImpar() {
    let numero = prompt("Digite um número: ");
    // Converte a entrada para um número
    numero = parseFloat(numero);

    if (isNaN(numero)) {
        return console.log("Por favor, insira um número válido.")
    }

    if (numero % 2 === 0) {
        return console.log("O número é par.")
    } else {
        return console.log("O número é ímpar.")
    }
}

var resultado = verificarParOuImpar();
console.log(resultado);
*/