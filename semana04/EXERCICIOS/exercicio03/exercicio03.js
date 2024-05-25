const calcularMedia = (array) => {
    if (array.length === 0) {
        return "O array está vazio. Não é possível calcular a média.";
    }

    const soma = array.reduce((total, numero) => total + numero, 0);
    const media = soma / array.length;

    return `A média dos números é: ${media}`;
};

// Exemplo de uso da função
const numeros = [5, 10, 15, 20];
const resultado = calcularMedia(numeros);
console.log(resultado);
