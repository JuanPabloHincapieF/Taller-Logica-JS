// Ejercicio 1

// Hacer un programa que lea los nombres y las edades de varias personas (n), al finalizar el programa debe mostrar el nombre y la edad de la persona mayor, también el nombre y la edad de la persona menor.

let personas = prompt("Ingresa la cantidad de personas");
let contenedor = document.querySelector(".formulario");
crearForm();
function crearForm() {
  for (let i = 1; i <= personas; i++) {
    contenedor.innerHTML += `
<div class=" p-5 m-5 rounded shadow-lg">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Nombre Persona ${i}</span
          >
          <input
            type="text"
            class="form-control inputNombre${i}"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Edad Persona ${i}</span
          >
          <input
            type="text"
            class="form-control inputEdad${i}"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>`;
  }
  contenedor.innerHTML += `<button type="button" class="btn btn-info mb-5" style="width:200px;" onclick="takeValues()">Enviar</button>
  `;
}

let mayorEdad = 0;
let menorEdad = 999;
let mayorNombre = "";
let menorNombre = "";

function takeValues() {
  for (let i = 1; i <= personas; i++) {
    let nombre = document.querySelector(`.inputNombre${i}`).value;
    let edad = document.querySelector(`.inputEdad${i}`).value;

    if (edad > mayorEdad) {
      mayorEdad = edad;
      mayorNombre = nombre;
    }
    if (edad < menorEdad) {
      menorEdad = edad;
      menorNombre = nombre;
    }
  }
  Swal.fire(
    `${mayorNombre} tiene ${mayorEdad} años, es el mayor, mientras que ${menorNombre} tiene ${menorEdad} años y es el menor`
  );
}
