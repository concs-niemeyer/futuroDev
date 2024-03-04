/*
utilize a fetch API para obter o arquivo JSON e, em seguida, a resposta deve ser convertida para o formato JSON usando o método .json().
O conteúdo JSON deve ser então exibido na página HTML.
 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                       
*/

// Não reconhece o arquivo data.json
let file = 'data.json'

fetch(file)
    .then(response => {
        return response.json()
    }
)
    .then((data) => {
        document.write(JSON.stringify(data))
        console.log(data)
    }
    )
.catch(error => console.log('Error fetching JSON:',error))