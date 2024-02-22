const prompt = require("prompt-sync")();

function avaliarSerie () {
    let contador = 0;
    let usuarios = 4;

    while (usuarios > 0 ) {
        let nota = prompt('Como você avalia a série Stranger Things? 1 - RUIM, 2 - MÉDIO e 3 - BOM: ');

        if (nota == 1) {
            console.log('Você escolheu a opção RUIM');
            contador ++;
        }   else if (nota == 2 || nota == 3) {
                console.log('Obrigado pela sua nota!')
        }   else {
                console.log('Digite uma opção válida, 1 ; 2 ou 3')
        }
    usuarios --;
}   console.log(`A quantidade de gente que votou na opção RUIM foi igual a ${contador}`)
}
avaliarSerie();