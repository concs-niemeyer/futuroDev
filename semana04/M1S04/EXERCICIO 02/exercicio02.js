const prompt = require("prompt-sync")();


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
