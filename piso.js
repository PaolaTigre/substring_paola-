//Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato
// de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.

const formato ="01.24";
let piso;
let indice;

for( let i = 0; i < formato.length; i++ ){
    if( formato[i] == '.' ) {
        indice = i;
    } 
}

piso = formato.substring( 0, indice)

console.log(piso);