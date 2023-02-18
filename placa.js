// 1. Escribir un programa de extraiga la parte numérica de una placa de un auto

const placa ="ABC-2345";
let numeros;
let indices;

for( let i = 0; i < placa.length; i++ ){
    if( placa[i] == '-' ) {
        indices = i;
    } 
}

numeros = placa.substring( indices + 1)

console.log(numeros);