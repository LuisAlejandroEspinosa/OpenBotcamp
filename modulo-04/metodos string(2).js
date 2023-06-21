//Metos de cadenas de textos parte (2)
let input = "ESCORpion"
let db = "escorpion"

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toUpperCase() === db.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase());

//formas de concatenar dos cadenas de caracteres
let str_1= "hola soy la primera cadena."
let str_2= "Y yo  soy la segunda cadena."
console.log(str_1.concat(" ", str_2))
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length)
// trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length);

//obtener el caracter que hay en ciertas posiciones
let str_4 = "Hola soy un string numero 4" // ["H", "o",  "l", "a", " ", "s"]
 
console.log(str_4.charAt(5))
console.log(str_4[5]);

//obtener la posicion de una palabra dentro de una cadena de carecteres
let str_5 = "Hola soy Luis y me gusta el futbol. Mi nombre es Luis y mi apellido es Espinosa"
console.log(str_5.indexOf("Luis"))
console.log(str_5.charAt("9"))
console.log(str_5.lastIndexOf("Luis"))