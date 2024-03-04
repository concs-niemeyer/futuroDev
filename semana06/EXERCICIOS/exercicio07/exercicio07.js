/*
Continuando o exercício 06 iremos além de informar através do alert o endereço informado pelo cep iremos perguntar também
se os dados informados estão corretos, caso esteja tudo correto salve esses dados no localStorage na chave “endereco”.
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
    let enderecoCEP = (`${responseApi.logradouro}, ${responseApi.complemento} - ${responseApi.bairro} - ${responseApi.localidade}/${responseApi.uf}`)
    confirm("O endereço está correto?\n" + enderecoCEP)
    //console.log(enderecoCEP)
    localStorage.setItem('endereco', enderecoCEP)
})

.catch(erro => console.log(erro))