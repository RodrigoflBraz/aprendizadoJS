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


//operations(5, 0)



/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

const classificaTriangulos = function(ladoA, ladoB, ladoC){
    if(ladoA === ladoB && ladoB === ladoC){
        console.log("Este triângulo é Equilátero")
    }

    else if(ladoA === ladoB || ladoA === ladoC || ladoB===ladoC){
        console.log("Este triângulo é Isósceles")
    }

    else if(!isNaN(ladoA) && !isNaN(ladoB) && !isNaN(ladoC)){
        console.log("Este triângulo é Escaleno")
    }

    else{
        throw new Error("Digite valores válidos!!");
    }
}

/*
classificaTriangulos(2,3,5)
classificaTriangulos(1,3,3)
classificaTriangulos(2,2,2)
classificaTriangulos(2,3,"claudio")
*/


/*

03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.


*/

const elevaBaseAoExpoente = function(base, expoente){
    if(isNaN(base) || isNaN(expoente)){
        throw new Error("Digite valores válidos!!");
    }

    return base ** expoente
}
console.log(elevaBaseAoExpoente(2, 3))


// ----------------------------------------
const arrowElevaBaseAoExpoente = (base, expoente) => base ** expoente;
console.log(arrowElevaBaseAoExpoente(5, 3))


/*

04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.


*/

const divisaoEResto = function(dividendo, divisor){
    if(isNaN(dividendo) || isNaN(divisor) || divisor === 0){
        throw new Error("Digite valores válidos!!");
    }

    console.log("O resultado da divisão é: ", dividendo / divisor)
    console.log("O resto da divisão é: ", dividendo % divisor)

}

divisaoEResto(23,3)


/*
05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

const formataDinheiro = function(valor){
    let valorInteiro = Math.floor(valor)
    let valorDecimal = valor - valorInteiro

    let valor_formatado = 'R$ ' + valorInteiro.toString() + ',' + valorDecimal.toString().slice(2,4)

    console.log(valor_formatado)
}

formataDinheiro(9677667676766.30000000000000004)


/*

06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

const calcularJurosSimples = function (capitalInicial, taxaJurosMensal, tempoAplicacaoMeses) {
    if(isNaN(capitalInicial) || isNaN(taxaJurosMensal) || isNaN(tempoAplicacaoMeses)){
        throw new Error("Digite valores válidos!!")
    }

    return capitalInicial * taxaJurosMensal * tempoAplicacaoMeses
}



const calcularJurosCompostos = function (capitalInicial, taxaJurosMensal, tempoAplicacaoMeses) {
    if(isNaN(capitalInicial) || isNaN(taxaJurosMensal) || isNaN(tempoAplicacaoMeses)){
        throw new Error("Digite valores válidos!!")
    }

    return capitalInicial * ((taxaJurosMensal) ** tempoAplicacaoMeses)

}

console.log(calcularJurosSimples(1000, 1.2, 16))
console.log(calcularJurosCompostos(1000, 1.2, 16))