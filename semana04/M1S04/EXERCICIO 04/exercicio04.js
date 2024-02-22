function avaliarSerie() {
    let contador = 0;
    let usuarios = 4;

    while (usuarios > 0) {
        const nota = console.log(prompt("Qual nota você daria para a série 'Stranger Things'? (1 - Ruim, 2 - Médio, 3 - Bom)"))

        // Verifica se a nota é válida (1, 2 ou 3)
        if (nota === '1') {
            console.log("Você achou a série ruim.");
            contador++;
        } else if (nota === '2' || nota === '3') {
            console.log("Obrigado pela sua avaliação!");
        } else {
            console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
            continue;  // Volta para o início do loop
        }

        usuarios--;
    }

    console.log(`Dos usuários entrevistados, ${contador} acharam a série ruim.`);
}

avaliarSerie();
