// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let formaTriangulo = false;

  if (lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    formaTriangulo = true; 
  } else if (lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    formaTriangulo = true; 
  } else if (lineC < Math.abs(lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    formaTriangulo = true; 
  }
  return formaTriangulo;
  }
  //console.log(triangleCheck(23,10,10))

// Desafio 13
function hydrate(stringDeBebidas) {
  let arrayDeCopos = stringDeBebidas.match(/\d+/g);
  
  conversaoEmNumeros = arrayDeCopos.map(str => {
    return Number(str);
  });

  var numeroCopos = conversaoEmNumeros.reduce(function(a, b){
    return a + b;
   }, 0);

  if (numeroCopos === 1) {
      return "1 copo de água"
  } else if (numeroCopos > 1) {
      return numeroCopos + " copos de água"
  }
}

//console.log(hydrate('3 cachaças, 9 cervejas e 1 gintonica'));



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};


