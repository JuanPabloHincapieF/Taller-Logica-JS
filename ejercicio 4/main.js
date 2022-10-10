// Insertar la serie de Fibonacci en una Tabla hasta n límite.

function fibonacci() {
  let cantidad = document.querySelector(".inputCantidad").value;
  let result = [1, 2];
  for (let i = 0; i < cantidad - 2; i++) {
    y = result[i] + result[i + 1];
    result.push(y);
    document.querySelector(".resultado").innerHTML = result;
  }
}
fibonacci();
