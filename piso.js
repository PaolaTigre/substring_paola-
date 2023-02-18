//Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato
// de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.

let number="01.24";
let buscar=".";
let posFinal=0;

for(let i = 0;i < number.length; i++){
    if(number.substring(i,i+1)==buscar){
        posFinal=i;          
    }
}

console.log("El número de piso es: " + number .substring(0,posFinal));