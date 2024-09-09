/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function pertenceFibonacci(numero){
  let a = 0, b = 1, proximo;

  if (numero === a || numero === b){
    return `${numero} pertence à sequência de Fibonacci.`;
  }

  while (b < numero){
    proximo = a + b;
    a = b;
    b = proximo;
  }

  if (b === numero){
    return `${numero} pertence à sequência de Fibonacci.`;
  }
  else {
    return `${numero} não pertence à sequência de Fibonacci.`;
  }
}

console.log(pertenceFibonacci(21));
console.log(pertenceFibonacci(22));