// Operador  .valueOf() -obtener valores numericos a partir de leterales
let a = 2;
let b = new Number(3);

    console.log(a);
    console.log(b);
    console.log(a + b);
    console.log(a.valueOf() + b.valueOf());

    console.log (b.valueOf());

let str = new String("hola soy un string");
    console.log(str);
    console.log(str.valueOf());

// NaN (Not a number)- Infinity
let n = Number('adios');
    console.log(n);
    console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
    console.log(numerador/divisor);

let divisor_2 = null;
    console.log(numerador/divisor_2);
//como convertir los string a vaolres numericos con Number,perseInt y parseFloat
let numero = '5.89';
let nun2 = 17.2;

    console.log(typeof numero);
    console.log(numero+ nun2);// Error de consepto

    console.log(Number(numero)+ nun2)

    console.log(parseInt(numero));
    console.log(parseFloat(numero));

let nun3 = 4;
    console.log(parseInt(nun3));
    console.log(parseFloat(nun3));

// Numeros hexadecimales (base 16)
let nunHex = '0x3a5b7';
    console.log(parseInt(nunHex, 16));

//obtener los valores maximo y minimo en javascript

let min_precision = Number.EPSILON;
let min_valor_JS= Number.MIN_VALUE;
let max_valor_JS= Number.MAX_VALUE;

    console.log(min_precision);
    console.log(min_valor_JS);
    console.log(max_valor_JS);
//2 elevado a la 1023 si lo puede gestionar javascript
//2 elevado a la 1024 lo toma como un infinito
//basados en Bais
    console.log(2**1023);
    console.log(2**1024);
