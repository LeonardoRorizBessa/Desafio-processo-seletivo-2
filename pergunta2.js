/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

function verificarLetraA(str) {
  let contador = 0;
  let strLowerCase = str.toLowerCase();

  for (let i = 0; i < strLowerCase.length; i++) {
    if (strLowerCase[i] === 'a') {
      contador++;
    }
  }

  if (contador > 0) {
    console.log(`A letra 'a' (maiúscula ou minúscula) aparece ${contador} vez(es) na string.`);
  } else {
    console.log("A letra 'a' (maiúscula ou minúscula) não aparece na string.");
  }
}

const texto = "Novo contratado, Leonardo Roriz Bessa.";
verificarLetraA(texto);