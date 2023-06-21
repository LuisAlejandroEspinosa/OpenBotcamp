//bucle while, bifurcacion if y una sentencia break


let factorial = 1;// esta variable nos declara la multiplicacion del 10 
let i = 1;

while (true) { // aqui en cada iteracion del bucle, multiplicamos el valor actual 
  factorial *= i;
  
  if (i === 10) {
    break;// ejecutamos "break", que detiene la ejecucion del bucle.
  }
  console.log(factorial);// // este seria el resultado del factorial de 10

  i++;
}


