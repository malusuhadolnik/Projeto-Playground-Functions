//const ciano = true;
//const yellow = true;
//const magenta = true;
//const green = false;
//const purple = false;


// Desafio 1
function compareTrue(cor1, cor2) {
  if (cor1 === true && cor2 === true){
    return true;
  } else {
    return false;
  }
}

//console.log(compareTrue(purple, green));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2; 
  return area;
}
//console.log(calcArea(5,2));

// Desafio 3 //Referência bibliográfica: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(frase) {
  let fraseDividida = frase.split(" ");
  return fraseDividida;
}
//console.log(splitSentence("O essencial é invisível aos olhos"));


// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
