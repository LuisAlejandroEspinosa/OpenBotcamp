// metodos de cadenas de texto (parte 3)
// https://regexr.com
let texto_Largo ="Este dedito compró un huevito,Este lo cocinó,Este le echó la sal,Este lo probó,y este pícaro gordo, se lo comió."

console.log(texto_Largo.match(/lo/g))

//¿Existe la palabra dentro del texto?
console.log(texto_Largo.includes("terremoto"))

//saber si un texto empieza con una palabra
console.log(texto_Largo.startsWith("Este dedito compró"))
//saber si un texto termina con otra palabra
console.log(texto_Largo.endsWith("comió."))