// Trabajando con Objetos
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: false,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo"
console.log(obj2.nombre)
console.log(obj.nombre)

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)

//////////////

const obj3 = { ...obj }

console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

/////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "La caida del halcon negro", año: 2001 },
    { titulo: "Intensa Mente", año: 2015 },
    { titulo: "Tarzán", año: 1999 },
    { titulo: "Tres metros sobre el cielo", año: 2004 },
    { titulo: "A prueba de fuego", año: 2008 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.año - b.año)

console.log(listaPeliculas)