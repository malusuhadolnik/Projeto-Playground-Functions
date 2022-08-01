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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
