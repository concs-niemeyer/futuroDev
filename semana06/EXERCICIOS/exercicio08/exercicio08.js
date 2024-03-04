/*
Para validar ainda mais o mini projeto criado a partir dos exercícios 06 e 07 iremos adaptar melhor nossa aplicação.
Antes de tudo, assim que executar a aplicação você irá verificar no localStorage se já existe a chave “endereco” caso haja,
deverá ser informado que já existe um endereço na nossa base de dados e se o usuário deseja fazer uma nova requisição para um novo endereço,
após disponibilizar o prompt para a captura do novo cep, salve os dados na mesma chave “endereco” existente no localStorage.
Caso não haja a chave o fluxo deve ser feito como no exercício 06 e 07, ou seja, você irá capturar o cep pelo prompt, fazer a requisição,
e salvar os dados no localStorage.

OBS: Lembre-se dos comandos para criar ou editar e pegar um item no Local Storage.
 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                       
*/

const viaCEP = {
    method:'GET'
}

function lerEndereco() {
    userAdress = localStorage.getItem('endereco')
    if (userAdress != undefined){
        alert("Já existe um endereço armazenado. ")
        var novoEndereco = confirm("Deseja atualizar o endereço?\n"+ userAdress)
        if (novoEndereco == true) {
            cepInformado = prompt('Informe o CEP por favor, apenas 8 números: ')                
        } else {
            cepInformado = localStorage.getItem('endereco')
        }
    }   else{
            alert('Não possui endereço armazenado.')
            cepInformado = prompt('Informe o CEP por favor, apenas 8 números: ')
        }
}
lerEndereco()

fetch(`https://viacep.com.br/ws/${cepInformado}/json`,viaCEP)
.then((responseObj) => {
    return responseObj.json()
})
.then((responseApi) => {
    let enderecoCEP = (`${responseApi.logradouro}, ${responseApi.complemento} - ${responseApi.bairro} - ${responseApi.localidade}/${responseApi.uf}`)
    confirm("O endereço está correto?\n" + enderecoCEP)
    //console.log(enderecoCEP)
    localStorage.setItem('endereco', enderecoCEP)
})

.catch(erro => console.log(erro))