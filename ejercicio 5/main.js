let tren = {
  vagon1: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon2: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon3: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon4: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon5: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon6: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon7: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon8: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon9: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
  vagon10: {
    cupo: 0,
    name1: "",
    cc1: "",
    name2: "",
    cc2: "",
    name3: "",
    cc3: "",
    name4: "",
    cc4: "",
    name5: "",
    cc5: "",
    name6: "",
    cc6: "",
    name7: "",
    cc7: "",
    name8: "",
    cc8: "",
    name9: "",
    cc9: "",
    name10: "",
    cc10: "",
  },
};

function entrar() {
  let inputVagon = document.querySelector(".input-vagon").value;
  let inputNombre = document.querySelector(".input-nombre").value;
  let inputDocumento = document.querySelector(".input-documento").value;

  if (tren[`vagon${inputVagon}`]["cupo"] < 10) {
    for (let i = 1; i <= 10; i++) {
      if (tren[`vagon${inputVagon}`][`name${i}`] === "") {
        tren[`vagon${inputVagon}`][`name${i}`] = inputNombre;
        tren[`vagon${inputVagon}`][`cc${i}`] = inputDocumento;
        tren[`vagon${inputVagon}`].cupo++;
        document.querySelector(`.vagon${inputVagon}__datos`).innerHTML += `
      <tr class="vagon${inputVagon}persona${i}">  
      <td class='vagon${inputVagon}Nombre${i}'>${
          tren[`vagon${inputVagon}`][`name${i}`]
        }</td>
      <td class='vagon${inputVagon}Documento${i}'>${
          tren[`vagon${inputVagon}`][`cc${i}`]
        }</td>
      <td><button type="button" onclick="bajar(${inputVagon},${i})" class="btn btn-info">
      bajar
    </button></td>
    </tr>
        `;
        break;
      }
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Este vagon esta lleno!",
    });
  }
}

function bajar(numeroVagon, x) {
  for (let i = 1; i <= 10; i++) {
    let inputNombre = document.querySelector(
      `.vagon${numeroVagon}Nombre${x}`
    ).innerHTML;
    let inputDocumento = document.querySelector(
      `.vagon${numeroVagon}Documento${x}`
    ).innerHTML;
    if (
      tren[`vagon${numeroVagon}`][`name${i}`] === inputNombre &&
      tren[`vagon${numeroVagon}`][`cc${i}`] === inputDocumento
    ) {
      tren[`vagon${numeroVagon}`][`name${i}`] = "";
      tren[`vagon${numeroVagon}`][`cc${i}`] = "";
      tren[`vagon${numeroVagon}`].cupo--;

      let borrarPersona = document.querySelector(
        `.vagon${numeroVagon}persona${i}`
      );
      borrarPersona.outerHTML = "";
      break;
    }
  }
}
