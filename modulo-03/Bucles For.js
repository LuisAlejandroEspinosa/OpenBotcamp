// Bucles For
// como se declaran: for (inicializacion; condicion;actulizacion)
//                                 "esto es un bucle"

// i = i + 1
// i += 1
// i++
// estas tres linaes de arriba cumplen la misma funcion 

for (let i = 0; i < 10; i = i + 3) {
     // "esto es un bucle"
     console.log (i);
}
for (let i = 0; i < 10; i += 2) {
    // "esto es un bucle"
    console.log (i);
}
for (let i = 0; i < 10; i ++) {
    // "esto es un bucle"
    console.log (i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12,800];
for ( let i = 0; i < lista.length; i++){
    console.log (lista [i]* 2);
    }
    // Estructura for.... of
for ( let valor of lista) {
        console.log(valor)
    }
    // Estructura forEach
     lista.forEach(valor =>{
        console.log (valor)
     })
    // Estructura for...in
     let persona= {
         nombre:"Luis",
         apellido: "Espinosa",
         edad:34,
         isDeveloper: true
        }
        console.log ( persona.nombre)
        let pro= "edad"
        console.log(persona[pro])

for (let propiedad in persona) {
    console.log(propiedad)
    console.log (persona[propiedad])
}

    