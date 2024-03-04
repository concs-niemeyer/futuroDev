/*
Para treinar um pouco mais requisições fetch inicie uma comunicação com a API via cep (Documentação - ViaCEP - Webservice CEP e IBGE gratuito ).
OBS:
Crie uma página html para imprimir o endereço através do cep.
Utilize este endpoint: https://viacep.com.br/ws/{cep_informado}/json
Caso a api retorne sucesso imprima em um alert o endereço formatado da seguinte forma: “logradouro, complemento - bairro - localidade/uf”
o cep_informado será passado por prompt pelo usuário.

 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                       
*/

const viaCEP = {
    method:'GET'
}
const cepInformado = prompt('Informe o CEP por favor, apenas 8 números: ')

fetch(`https://viacep.com.br/ws/${cepInformado}/json`,viaCEP)
.then((responseObj) => {
    return responseObj.json()
})
.then((responseApi) => {
    alert(`${responseApi.logradouro}, ${responseApi.complemento} - ${responseApi.bairro} - ${responseApi.localidade}/${responseApi.uf}`)
})
.catch(erro => conso(erro))