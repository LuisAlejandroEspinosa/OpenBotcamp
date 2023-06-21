//Metodos mas utilizados con  cadenas de caracteres
//Como obtener la longitud de un string
let str= "Hola soy un string"
console.log(str.length)

// Obtener partes de cadenas de caracteres
//slice() substring() substr()
let slice_str = str.slice(5,10)
console.log(slice_str)

let substring_str = str.substring(5,10)
console.log(substring_str)

let substr_str = str.substr(5,10)
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto
let cadena= "Hola mi nombre es Luis"
console.log( cadena)
// Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace("Luis", "Miguel"))

let texto_largo="Este dedito compró un huevito,Este lo cocinó,Este le echó la sal,Este lo probó,y este pícaro gordo, se lo comió."

// Al utilizar strings solo reemplaza la primera instancia
console.log(texto_largo.replace('Este', 'cinco'))

// Al utilizar la expresion regular /g (global).reemplaza todas las instancia
console.log(texto_largo.replace(/Este/g,'cinco'))