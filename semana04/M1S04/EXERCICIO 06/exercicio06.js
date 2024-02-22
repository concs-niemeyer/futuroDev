/* Utilizando estrutura de repetição for realize a tabuada do número 5 e exiba no console da seguinte forma:

5 x 0 = 0

5 x 1 = 5

5 x 2 = 10

....

5 x 10 = 50
*/
function tabuadaDoCinco() {
    const primeiroNumero = 5

for (let i = 0; i <=10; i ++) {
    let resultado = primeiroNumero * i
console.log(` ${primeiroNumero} x ${i} = ${resultado}`)
    }
}
tabuadaDoCinco()