// Insertar la serie de Fibonacci en una Tabla hasta n límite.

x = prompt("cuantas veces vas a calcular la serie de fibonacci?");

function fibonacci() {
  let result = [1, 2];
  for (let i = 0; i < x; i++) {
    y = result[i] + result[i + 1];
    result.push(y);
    console.log(result);
  }
}
fibonacci();
