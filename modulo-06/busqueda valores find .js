// iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]


// forma antigua  (copo efeciente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
 // forma ES6 (mas eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77,  2, 3, 93, 19]
arrayNums.forEach(valor =>{
        suma += valor;
        console.log (valor)
})
    console.log(suma);

// busqueda de un valor  dentro de una lista .find()
//quiero encontrar el elemento 90
const variable = array.find(valor =>{
    if (valor === 90){
        return true;
    }
})

console.log(variable)

    const listaObjetos = [
        {nombre: "Juliana", edad :35},
        {nombre:"Luis",edad:34 },
        {nombre:"Salome",edad:28},
        {nombre:"Samantha",edad:3 },
        {nombre:"Saleth",edad:29 },
]
// const objeto = listaObjetos.find(o => {
    // if (o.nombre === "Salome") {
        // return o.nombre ==="Salome"
    // }
// })
const objeto = listaObjetos.find(o => o.nombre === "Samantha")
console.log(objeto.edad)

const {edad} =listaObjetos.find(o => o.nombre === "Samantha")
console.log(edad)
