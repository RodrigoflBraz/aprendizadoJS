/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

const operations = function(a, b){
    if(isNaN(a) || isNaN(b) || b === 0){
        throw new Error("Digite valores válidos!!");
    }

    console.log('A soma dos valores é: ', a + b)
    console.log('A subtração dos valores é: ', a - b)
    console.log('A multiplicação dos valores é: ', a * b)
    console.log('A divisão dos valores é: ', a / b)


}

operations(5, 0)
