// Ejercicio 2

// Hacer un algoritmo que lea n notas y nos indique cuantas con mayores a cero y cuantas son menores a cero, también cuántos son iguales a cero.

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

let imprimir = (document.querySelector(
  ".formulario"
).innerHTML = `<h1>Los numeros negativos fueron ${contadorNegativo}</h1> <br> <h1>Los numeros iguales a 0 fueron ${contadorCero}</h1><br> <h1>Los numeros positivos fueron ${contadorPositivo}</h1> <br>`);
