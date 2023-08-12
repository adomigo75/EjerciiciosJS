/**
 * 1 - 
 * Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 * alert("opcion no valida")
 * Dependiendo de que departamento es debe mostrar cual es la capital
 */

/**
 * 2 - 
 */

let departamento = prompt ("Ingrese un departamento (Cundinamarca, quindio, antioquia, valle)")
if (departamento === null || departamento === "") {
    alert ("Opcion no valida")


} else {
    departamento = departamento.toLowerCase()
    if (departamento === "cundinamarca") {
        alert("la capital del departamento de "+departamento+" es Bogota")
    } else {
        if (departamento === "quindio") {
            alert("la capital del departamento de "+departamento+" es Armenia")
        } else {
            if (departamento === "antioquia") {
                alert("la capital del departamento de "+departamento+" es medellin")
            } else {
                if (departamento === "valle") {
                    alert("la capital del departamento de "+departamento+" es cali")
                } else {
                    alert ("el departamento que ingreso no se encuentra en la lista")
                }  
            }  
        }  
    }    
}