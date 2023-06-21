// break  y continue
// labels
let unidades = 0
let decenas= 0
 bucleDecenas: while (true) {
    bucleUnidades: while (true) {
    console.log(`El numero actual es: ${decenas}${unidades}`)
        // unidades = unidades +1,Es lo mismo que la siguiente linea
        unidades ++
        if (unidades === 10){
            unidades = 0
            break  bucleUnidades
        }
        if (decenas === 2){
            break bucleDecenas
        }
    }
    decenas ++
}
console.log(" Ya hemos terminado")