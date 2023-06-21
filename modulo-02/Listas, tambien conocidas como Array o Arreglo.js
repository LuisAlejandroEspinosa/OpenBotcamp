// listas, se conoce tambien como array o arreglo
const lista= [1, "hola", true, undefined, null];
const lista2= new Array (2, "hola", true, undefined, null);
const lista3= new Array (3,);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log (lista)
console.log (lista2)
console.log (lista3)
console.log (lista4)

// objetos
const movil ={
    altura: 10,
    anchura: 5,
    marca: "xiaomi", 
    iswhite: false,
    contatos: ["luis", "mario", "carlos"],
    tarjeta: {
        marca:" tigo",
        almacenamiento: 32,
        }
}
movil.año= 2023;
movil.marca=" samsung";
console.log (movil.marca);

// fechas //podemos utilizar esta libreria como apoyo (moment.js)
const ahora = new Date();
console.log(ahora);

const fecha_milis= new Date(10); //Se define utilizando los milisegundo
console.log (fecha_milis);

const fecha_cadena = new Date("marzo 25 2023");
console.log (fecha_cadena);

const fecha_valores = new Date (2023, 0, 15);
console.log (fecha_valores);

const dia =  ahora.getDate();
const mes =  ahora.getMonth() + 1;
const año =  ahora.getFullYear();
console.log (dia,mes,año)


