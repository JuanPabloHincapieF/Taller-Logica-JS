// Ejericicio 3

// Tiendas ACME desea un programa que se ingrese en monto de varias ventas, al ingresar cada una de las ventas debe mostrarse un descuento del 7% y el monto que se paga en dicha venta (al decir varias ventas nos referimos a n ventas).

// cuantas ventas deseas ingresar
// aplicarle descuento
// mostrar la venta con el descuento

let cont = 0;
function tomarVenta(e) {
  if (e.key === "Enter") {
    cont++;
    let venta = document.querySelector(".inputVenta").value;
    let descuento = venta * 0.93;
    document.querySelector(".tableVenta").innerHTML += `
    <tr>
    <th scope="row">${cont}</th>
    <td>${venta}</td>
    <td>${descuento}</td>
  </tr>`;
  }
}
