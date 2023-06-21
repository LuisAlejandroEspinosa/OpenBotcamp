// como trabajar con listas(array,arreglos,vectores)
let var1 = { id: "hola"}
let array = [1, "Hola",false,{ id: 5},null, undefined,var1] 

    console.log(array);
// puede obterner cual quier tipo de dato, string, bueleono, objeto {id: 5},null,undefined, he incluso variables

//Aceder a los valores de un array a atres de su posicion
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);

// metodos para ntruducir nurvos valores en nuestros array
// .push () .unshift () => mutan el valor de nuestro array
// para obtener valores al final utilizamos metodo ->.push
array.push("final",45, 100, false);
    console.log(array);

// para obtener valores al principio utilizamos metodo -> .unshift ()
array.unshift("iniciar"); // se agrega desde la izquierda hacia arriba
        console.log(array);

//Metodo pop() elimina del ultimo elemento y devuelve ese elemento
// .pop() .shift() => mutan el valor del array

const array2 = [1, 3, "hola",false];
// Valores al final -> pop
array2.pop();
    console.log (array2);

//Valores al principio ->.unshift ()
array2.shift();
    console.log(array2);

// Metodo para eliminar,modificar o añadir valores en nuestro array
// .splice(x, y, z)

const array3 = [1, 2, 3, 4, 5, 6 ];
//Eliminar valores .splice (indice,numvalores a elimiar)
array3.splice(2, 1);
console.log(array3);

//Añidir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola");
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array3)



