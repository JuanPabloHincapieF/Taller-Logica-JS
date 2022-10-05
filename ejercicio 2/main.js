let cantidad = parseInt(prompt("cuantas notas deseas calcular?"));
let numeros = [];
let contadorNegativo = 0;
let contadorPositivo = 0;
let contadorCero = 0;
for (let j = 1; j <= cantidad; j++) {
  numeros.push(parseInt(prompt("Ingresa los numeros")));
}
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0) {
    contadorNegativo++;
  } else if (numeros[i] > 0) {
    contadorPositivo++;
  } else {
    contadorCero++;
  }
}
document.write(
  `<h1>Los numeros negativos fueron ${contadorNegativo}</h1> <br>`
);
document.write(`<h1>Los numeros iguales a fueron ${contadorCero}</h1><br>`);
document.write(
  `<h1>Los numeros positivos fueron ${contadorPositivo}</h1> <br>`
);
