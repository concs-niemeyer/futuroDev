/*Crie uma função chamada getUserInfo que simula uma consulta assíncrona a um servidor para obter informações de um usuário.
Essa função deve retornar um objeto com as informações de um usuário, como nome, idade e email (você pode definir os valores).
Com o setTimeout simule o tempo de espera da consulta para demorar 2 segundos.
Utilize async/await para realizar a chamada de forma assíncrona.
Em seguida, crie outra função que utiliza getUserInfo para obter as informações do usuário e, após receber essas informações,
exibe-as no console.

 _______  _____  __   _ _______ _______
 |       |     | | \  | |       |______
 |_____  |_____| |  \_| |_____  ______|
                                       
*/

// Função que simula uma consulta assíncrona ao servidor
const fetchDataFromServer = async () => {
    return new Promise((resolve) => {
      // Simula um tempo de espera de 2 segundos
      setTimeout(() => {
        
        // Simula os dados do usuário (nome, idade, email)
        const userInfo = {
          nome: 'Usuário Exemplo',
          idade: 25,
          email: 'usuario@example.com'
        };
        resolve(userInfo);
      }, 2000);
    });
};
  
// Função principal que usa async/await para obter informações do usuário
const getUserInfo = async () => {
    try {
      // Aguarda o resultado da consulta assíncrona
      const userInfo = await fetchDataFromServer();
      return userInfo;
    } catch (error) {
      // Trate qualquer erro que possa ocorrer durante a consulta
      console.log('Erro ao obter informações do usuário:', error);
    }
};

// Exemplo de uso da função
getUserInfo()
    .then((userInfo) => {
      console.log('Informações do usuário:', userInfo);
    })
    .catch((error) => {
      console.log('Erro na execução:', error);
    });
  