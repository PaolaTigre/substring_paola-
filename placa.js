// 1. Escribir un programa de extraiga la parte numérica de una placa de un auto

let placa="ABC-2345";
let carBuscar="-";
let posIni=0;

for(let i = 0;i < placa.length; i++){
    if(placa.substring(i,i+1)==carBuscar){
        posIni=i+1;
        break;        
    }
}

console.log("El NUMERO DE PLACA es: " + placa.substring(posIni));