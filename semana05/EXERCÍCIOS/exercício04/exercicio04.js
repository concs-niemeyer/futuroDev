/*
Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array.
Utilize o reduce para realizar a soma.
*/

const numeros = [8, 2, 4, 5, 10]

const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0);

  console.log(soma)