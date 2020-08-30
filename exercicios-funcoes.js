const input = require('readline-sync')

// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(numero1, numero2) {
  return numero1 + numero2
}

function subtracao(numero1, numero2) {
  return numero1 - numero2
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2
}

function divisao(numero1, numero2) {
  return numero1 / numero2
}

function operacoes(num1, num2, operacao) {
  switch (operacao) {
    case "soma":
      return num1 + num2
    case "subtracao":
      return num1 - num2
    case "multiplicacao":
      return num1 * num2
    case "divisao":
      return num1 / num2
    }
}

console.log(soma(2, 2))
console.log(subtracao(4, 2))
console.log(multiplicacao(4, 4))
console.log(divisao(4, 2))
console.log("CONSOLE LOG DA FUNCAO OPERAÇÕES", operacoes(2, 2, "subtracao"))

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

function multiplicaSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não queremos zero`
  }
  return num1 * num2
}

console.log(multiplicaSemZero(4, 3))

function divideSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não queremos zero`
  }
  return num1 / num2
}

console.log(divideSemZero(10, 2))

// 3) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function chamaFuncao(num1 , num2) {
  console.log(`O resultado da operação é ${multiplicaSemZero(num1, num2)}`)
}

chamaFuncao(10, 2)

// 4) utilizando as funções de soma e multiplicação já feitas nos exercícios anteriores, crie uma nova função que chame essas funções e resolva a conta 36325 * (9824 + 777).



// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100 (por exemplo, 54 e 12). Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo. 







// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 números
// 2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum.  

function recebeTresParametro (par1, par2, par3){
  if (par1 === undefined || par2 === undefined || par3 === undefined) {
    return "Preencha todos os valores corretamente!"
  } else {
    return (par1 * par2 * par3) + 2
}

}
console.log(recebeTresParametro(2, 4, 6))

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um parâmetro for passado, retorne o valor do parâmetro.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum parâmetro for passado, retorne "não recebeu parâmetro"

function recebeTresParametros(param1, param2, param3) {
  if (param1 != undefined && param2 === undefined && param3 === undefined) {
    return param1
  } else if (param1 != undefined && param2 != undefined && param3 === undefined) {
    return param1 + param2
  } else if (param1 != undefined && param2 != undefined && param3 != undefined) {
    return (param1 + param2) / param3
  } else {
    return "não recebeu parâmetro"
  }
}

console.log(recebeTresParametros(2, 2, 2)) // 2

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

function palavraInversa(strVar) {
  strVar = input.question("Ja viu uma palavra escrita inversamente? Entao, digite uma palavra: ")
  console.log (((strVar.split('')).reverse()).join(''))
}
 palavraInversa()

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

function checarPalindrome(strVar){
  
  let invertida = strVar.split('').reverse().join('')
  return strVar === invertida
}
console.log(checarPalindrome("arara"))
  
// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

function maiorPalavra(str1 , str2){
  let palavra1 = str1.lenght
  let palavra2 = str2.lenght
  if (palavra1 > palavra2){
    console.log(str1)
  }else {
    console.log(str2)
  }
} 
maiorPalavra('Banana','Chocolate')