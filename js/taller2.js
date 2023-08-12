/**
 * -
Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
Ingresar objetivo de visita (turismo, comidas, museos)
Dependiendo de la opcion elegida
ejemplo1 (antioquia y comidas)
mostrar un alert("las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
ejemplo 2: se ingreso cundinamarca y turismo
mostrar un alert(lugares para visitar en cundinamarca es monserrate, la candelaria etc)
alert("opcion no valida") en caso que no se ingrese alguna de las opciones
**/

let departamento = prompt(
  "Ingrese un departamento (Cundinamarca, quindio, antioquia, valle)"
);
let visita = prompt("a que lugar desea ir (turismo, comidas, museos)");
if (
  departamento === null ||
  visita === null ||
  departamento === "" ||
  visita === ""
) {
  alert("Opcion no valida");
} else {
  departamento = departamento.toLowerCase();
  visita = visita.toLowerCase();
  if (departamento === "cundinamarca" && visita === "turismo") {
    alert(
      "en el departamento de " +
        departamento +
        "los lugares mas visitados es catedral sal y  parque jaime duque"
    );
  } else {
    if (departamento === "cundinamarca" && comidas === "comidas") {
      alert(
        "en el departamento de " +
          departamento +
          "las comidas mas tipicas en el departamento es"
      );
    } else {
      if (departamento === "cundinamarca" && museos === "museos") {
        alert(
          "en el departamento de " +
            departamento +
            "los museos mas visitados son casa museo tequendama y casa de la pola"
        );
      } else {
        if (departamento === "quindio" && turismo === "turismo") {
          alert(
            "en el departamento de " +
              departamento +
              "los lugares mas visitados es parque del cafe y valle del cocora"
          );
        } else {
          if (departamento === "quindio" && comidas === "comidas") {
            alert(
              "en el departamento de " +
                departamento +
                "las comidas mas tipicas en el departamento es bandeja paisa y la trucha"
            );
          } else {
            if (departamento === "quindio" && museos === "museos") {
              alert(
                "en el departamento de " +
                  departamento +
                  "los museos mas visitados son museo del oro quimbaya y  museo del disco y la musica "
              );
            } else {
              if (departamento === "antioquia" && turismos === "turismos") {
                alert(
                  "en el departamento de " +
                    departamento +
                    "los lugares mas visitados es medellin y arboletes "
                );
              } else {
                if (departamento === "antioquia" && comidas === "comidas") {
                  alert(
                    "en el departamento de " +
                      departamento +
                      "las comidas mas tipicas son bandeja paisa y mazamorra paisa "
                  );
                } else {
                  if (departamento === "antioquia" && museos === "museos") {
                    alert(
                      "en el departamento de " +
                        departamento +
                        "los museos mas visitados son museo de artes modernos y museo casa de la memoria "
                    );
                  } else {
                    if (departamento === "valle" && turismos === "turismos") {
                      alert(
                        "en el departamento de " +
                          departamento +
                          "los lugares mas visitados es cali y palmira "
                      );
                    } else {
                      if (departamento === "valle" && comidas === "comidas") {
                        alert(
                          "en el departamento de " +
                            departamento +
                            "las comidas mas tipicas son sancocho de gallina y el arroz atollado"
                        );
                      } else {
                        if (departamento === "valle" && museos === "museos") {
                          alert(
                            "en el departamento de " +
                              departamento +
                              "los museos mas visitados son museo aereo fenix y museo de la caña "
                          );
                        } else {
                          alert("lo que ingreso no se encuentra en la lista");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
