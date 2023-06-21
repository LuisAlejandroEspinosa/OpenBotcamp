//- Una cadena de texto con tu Nombre
let nombre="Luis"
    console.log(nombre);

//- Otra cadena de texto con tu Apellido
let apellido="Espinosa"
    console.log(apellido);

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante=("")
    console.log(estudiante.concat("Luis"," ", "Alejandro"))

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let input=("estudianteMayus")
    console.log(input.toUpperCase())

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let db=("estudianteMinus")
console.log(input.toLowerCase())

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let str_estudiante = " estudiante "
    console.log(str_estudiante.length)

//- Una variable que contenga la primera letra del Nombre
let str_nombre= "Luis" 
console.log(str_nombre.charAt(0))

//- Otra variable que contenga la última letra del Apellido
let str_apellido= "Espinosa"
    console.log(str_apellido.charAt(str_apellido.length-1))

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let str= "    estudiante    "
console.log(str.trim().length)

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let Estudiante = "Luis"
let Nombre= "Luis"
    console.log(Estudiante.toUpperCase() === Nombre.toUpperCase())


