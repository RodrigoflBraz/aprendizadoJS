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


operations(5, 5)



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

    let valorFormatado = 'R$ ' + valorInteiro.toString() + ',' + valorDecimal.toString().slice(2,4)

    return valorFormatado
}

console.log(formataDinheiro(3555555555553.7000065609750000004))


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



/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”
*/


const calcularBhaskara = function(ax, bx, c){
    if(isNaN(ax) || isNaN(bx) || isNaN(c)){
        throw new Error("Digite valores válidos!!");
    }

    const delta = (bx ** 2) - 4 * ax * c
    
    if (delta < 0){
        return "Delta é negativo"
    }
    

    resultadoPositivo = ((bx * -1) + Math.sqrt(delta)) / (2* ax)
    resultadoNegativo = ((bx * -1) - Math.sqrt(delta)) / (2* ax)

    const resultados = [resultadoPositivo, resultadoNegativo]
    return resultados

}

console.log(calcularBhaskara(3, 55, 2))



/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

const calculaRecords = function(stringRecordes){

    let vetorDePontos = stringRecordes.split(" ").map(Number)

    let piorPontuacao = vetorDePontos[0];
    let indicePiorPontuacao = 0;
    let maiorPontuacao = vetorDePontos[0]
    let quantidadeRecordsBatidos = 0;

    let vetorRetorno = []

    for(let a = 0; a < vetorDePontos.length; a++){
        
        if(vetorDePontos[a] > maiorPontuacao){
            quantidadeRecordsBatidos ++
            maiorPontuacao = vetorDePontos[a]
        }

        else if(vetorDePontos[a] < piorPontuacao){
            piorPontuacao = vetorDePontos[a]
            indicePiorPontuacao = a
        }
        
    }

    vetorRetorno = [quantidadeRecordsBatidos, indicePiorPontuacao + 1]
    return vetorRetorno
}

console.log(calculaRecords("10 20 20 8 25 3 0 30 1"))

/*

09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.


*/


const arredondaNotas = function(nota){
    if(nota < 38){
        return nota
    }

    const diferencaParaProximoMultiplo = nota % 5

    if (diferencaParaProximoMultiplo >= 3) {
        return nota + 5 - diferencaParaProximoMultiplo
    }
    else{
        return nota
    }
}

console.log(arredondaNotas(83))

/*

10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

*/

const divisivelPorTres = function(numero){
    if (numero % 3 === 0){
        return true
    }
    return false
}

console.log(divisivelPorTres(7))


/*

11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.

*/

const calcularAnoBissexto = function (ano){
    if(ano % 400 === 0){
        console.log('O ano é bissexto!!!!')
        return true
    }

    else if(ano % 100 === 0){
        console.log('O ano não é bissexto!!!!')
        return false
    }

    else{

        if(ano % 4 === 0){
            console.log('O ano é bissexto!!!!')
            return true
        }

        else{
            console.log('O ano não é bissexto!!!!')
            return false 
        }
    }

}

calcularAnoBissexto(2024)



/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

const calcularFatorial = function (numero){
    
    let fatorial = 1;

    if (numero === 0 || numero ===1){ return fatorial }
    else if(numero < 0){ throw new Error("Digite valores válidos!!") }

    else{
        for(let i = 1; i<= numero; i++){
            fatorial = fatorial * i
        }
    }

    return fatorial
}

console.log(calcularFatorial(5))




/*
13) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/


const calcularNovoSalario = function (plano, salarioAtual) {
    let novoSalario;

    switch (plano) {
        case 'A':
            novoSalario = salarioAtual * 1.10;
            break;
        case 'B':
            novoSalario = salarioAtual * 1.15;
            break;
        case 'C':
            novoSalario = salarioAtual * 1.20;
            break;
        default:
            console.log("Plano inválido");
            return;
    }

    console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
}

calcularNovoSalario('A', 1000);




/*
14) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/


const calcularQuantidadeNota100 =  function (valor){
    if(valor / 100 > 0){
        return [true, Math.floor((valor / 100))]
    }
    else{return [false]}
}

 
const calcularQuantidadeNota50 =  function (valor){
    if(valor / 50 > 0){
        return [true, Math.floor(valor / 50)]
    }
    else{return [false]}
}

const calcularQuantidadeNota10 =  function (valor){
    if(valor / 10 > 0){
        return [true, Math.floor(valor / 10)]
    }
    else{return [false]}
}

const calcularQuantidadeNota5 =  function (valor){
    if(valor / 5 > 0){
        return [true, Math.floor(valor / 5)]
    }
    else{return [false]}

}

const calcularTroco = function (valor){
    let valor_atual = valor
    var str_resultado = ''

    let quantidade_notas_100 = calcularQuantidadeNota100(valor_atual)
    if (quantidade_notas_100[0] && quantidade_notas_100[1] != 0){
        valor_atual = valor_atual - (100 * quantidade_notas_100[1])
        str_resultado = `${quantidade_notas_100[1]} nota(s) de R$ 100.`
        console.log(str_resultado)
    }

    let quantidade_notas_50 = calcularQuantidadeNota50(valor_atual)
    if (quantidade_notas_50[0] && quantidade_notas_50[1] != 0){
        valor_atual = valor_atual - (50 * quantidade_notas_50[1])
        str_resultado = `${quantidade_notas_50[1]} nota(s) de R$ 50.`
        console.log(str_resultado)
    }

    let quantidade_notas_10 = calcularQuantidadeNota10(valor_atual)
    if (quantidade_notas_10[0] && quantidade_notas_10[1] != 0){
        valor_atual = valor_atual - (10 * quantidade_notas_10[1])
        str_resultado = `${quantidade_notas_10[1]} nota(s) de R$ 10.`
        console.log(str_resultado)
    }

    let quantidade_notas_5 = calcularQuantidadeNota5(valor_atual)
    if (quantidade_notas_5[0] && quantidade_notas_5[1] != 0){
        valor_atual = valor_atual - (5 * quantidade_notas_5[1])
        str_resultado = `${quantidade_notas_5[1]} nota(s) de R$ 5.`
        console.log(str_resultado)
    }

    if (valor_atual > 0){
        str_resultado = `${valor_atual} nota(s) de R$ 1.`
        console.log(str_resultado)
    }
}

calcularTroco(376)


/*

15) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

*/
 
const calcularAnuidade = function (mes, valor) {
    return calcularJurosCompostos(valor, 1.05, mes - 1)
}

console.log(calcularAnuidade(6, 1200))


/*

16) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

*/

const definirSituacaoAluno = function(cod_aluno, nota1, nota2, nota3){
    
    let media_aluno = 0
    let notas_aluno = [nota1, nota2, nota3]
    let maior_nota = Math.max(...notas_aluno)
    let index_maior_nota = notas_aluno.indexOf(maior_nota)

    for(let a = 0; a < notas_aluno.length; a++){
        if(a === index_maior_nota){
            media_aluno += notas_aluno[a] * 4
        }
        else{
            media_aluno += notas_aluno[a] * 3
        }
    }

    media_aluno = media_aluno/10

    if (media_aluno > 5){
        console.log(`O aluno de codigo: ${cod_aluno}, com notas: ${nota1} , ${nota2} , ${nota3}, média: ${media_aluno}, foi APROVADO!`)
    }

    else {
        console.log(`O aluno de codigo: ${cod_aluno}, com notas: ${nota1} , ${nota2} , ${nota3}, média: ${media_aluno}, foi REPROVADO!`)
    }

}

definirSituacaoAluno(1, 3 , 4 ,5 )

/*

17) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while

*/

let a = 0

while(a < 11){
    console.log(" Hello World!")
    a++
}


/*

18)  Fazer um programa para encontrar todos os pares entre 1 e 100.

*/

let b = 1

while(b < 101){
    if(b % 2 === 0){
        console.log(b)
    }
    b++
}

/*

19)  Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

*/

const definirQuantidadeParEImpar = function(vetor_inteiros){
    let quantidade_par = 0;
    let quantidade_impar = 0;

    for (let numero of vetor_inteiros){
        if(numero % 2 === 0){quantidade_par ++}
        
        else {quantidade_impar ++}
    }

    console.log(`Esse vetor tinha: ${quantidade_par} de numeros pares, e: ${quantidade_impar} de numeros impares!`)
}

definirQuantidadeParEImpar([1, 2, 3, 4, 6, 7, 8, 2, 7, 8, 234, 55, 7])


/*

20)  Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.

*/

const definirQuantidadesDeElementosNoIntervalo = function(vetor_numeros) {
    
    let quantidade_dentro = 0;
    let quantidade_fora = 0;

    for (let numero of vetor_numeros){
        if (numero < 10 || numero > 20) {quantidade_fora ++}
        else {quantidade_dentro ++}
    }

    console.log(`Esse vetor tinha: ${quantidade_dentro} de numeros dentro do intervalo, e: ${quantidade_fora} de numeros fora do intervalo!`)

}

definirQuantidadesDeElementosNoIntervalo([1, 2, 3, 4, 6, 7, 8, 2, 7, 8, 234, 55, 7])



/*

21)  Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

*/


function extrairElementosUnicos(vetor) {
    return vetor.filter((item, index) => vetor.indexOf(item) === index);
     
}

const compararStrings = function(string1, string2) {
    let vetor_string1 = string1.toLowerCase().replace(/\s/g, '').split('')
    vetor_string1 = extrairElementosUnicos(vetor_string1)

    let vetor_string2 = string2.toLowerCase().replace(/\s/g, '').split('')
    vetor_string2 = extrairElementosUnicos(vetor_string2)

    return  vetor_string1.every(elemento => vetor_string2.includes(elemento));


}

console.log(compararStrings('gfhaaafghgfh', 'fghfghfhgfhfhfghgf'))

/*

22)  Criar uma função factory, que instancia objeto produto, com nome e valor do produto sendo parâmentros, e o desconto fixo

*/

function criarProduto(nome, valor) {
    return {nome_produto:  nome, 
            valor_produto: valor, 
            desconto: 0.15}
}

const produto = criarProduto('Camiseta', 100)
console.log(produto)


