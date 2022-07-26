// const ciano = true;
// const yellow = true;
// const magenta = true;
// const green = false;
// const purple = false;

// Desafio 1
function compareTrue(cor1, cor2) {
  if (cor1 === true && cor2 === true) {
    return true;
  } else {
    return false;
  }
}

// console.log(compareTrue(purple, green));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(5,2));

// Desafio 3 //Referência bibliográfica: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(frase) {
  let fraseDividida = frase.split(' ');
  return fraseDividida;
}
// console.log(splitSentence("O essencial é invisível aos olhos"));

// Desafio 4
function concatName(arrayDeStrings) {
  let primeiroNome = arrayDeStrings[0];
  let ultimoNome = arrayDeStrings[arrayDeStrings.length - 1];
  let concat = ultimoNome + ', ' + primeiroNome;
  return concat;
}
// console.log(concatName(["Max", "Eleven", "Steve", "Robin", "Eddie", "Nancy"]));

// Desafio 5
function footballPoints(wins, ties) {
  let totalpoints = (wins * 3) + ties;
  return totalpoints;
}
// console.log(footballPoints(0,0));

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumeroEh = arrayDeNumeros[0];
  for (let index in arrayDeNumeros) {
    if (maiorNumeroEh < arrayDeNumeros[index]) {
      maiorNumeroEh = arrayDeNumeros[index];
    }
  }
  let repeticoes = 0;
  for (let indice in arrayDeNumeros) {
   if (arrayDeNumeros[indice] === maiorNumeroEh) {
      repeticoes += 1;
     }
  }
  return repeticoes;
}
// console.log(highestCount([11, 11, 11, 11, 8, 9, 9, 1]));

// Desafio 7 //Referências bibliográficas: https://www.w3schools.com/jsref/jsref_abs.asp
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat1 > distCat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numberArray) {
  let fizzBuzzString = [];
  for (let index in numberArray){
    if (numberArray[index] % 15 === 0 && numberArray[index] % 5 === 0){
      fizzBuzzString.push("fizzBuzz");
    } else if (numberArray[index] % 3 === 0){
      fizzBuzzString.push("fizz");
    } else if (numberArray[index] % 5 === 0){
      fizzBuzzString.push("buzz");
    } else {
      fizzBuzzString.push("bug!");
    }
  }
return fizzBuzzString;
}
 console.log(fizzBuzz([9, 25])); // fizz, buzz
 console.log(fizzBuzz([2, 15, 7, 9, 45])); // bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'
 console.log(fizzBuzz([7, 9]));// 'bug!', 'fizz'

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
