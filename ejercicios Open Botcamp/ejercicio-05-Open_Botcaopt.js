/*Crea un archivo JS que contenga las siguientes líneas*/
//- Una variable que contenga tu altura en centímetros (entero)
const Luis_altura_cm = 167;
    console.log(Luis_altura_cm);

//- Una variable que contenga tu altura en metros (número de coma flotante)
const Luis_altura_mt = 1.67;
    console.log(Luis_altura_mt);

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
const Luis_pesa_kg = 68.8;
    console.log(Luis_pesa_kg);

//- Una variable que contenga tu altura en metros redondeada hacia arriba

const altura_red = Math.ceil(Luis_altura_cm);
    console.log(altura_red);   
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const peso_red = Math.floor(Luis_altura_mt);
    console.log(peso_red);
/*- Una variable que contenga si "el máximo valor que se puede obtener en 
Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/
const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
    console.log(sonIguales);