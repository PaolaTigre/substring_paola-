//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31"

let fecha="2022-10-31";
let buscar="-";
let posOne=0;
let posTwo=0;


for(let i = 0;i < fecha.length; i++){
    if(fecha.substring(i,i+1)==buscar){
      posOne=i+1;
        break;        
    }
}

for(let i = posOne;i < fecha.length; i++){
    if(fecha.substring(i,i+1)==buscar){
        posTwo=i;
        break;        
    }
}

console.log("El mes es: " + fecha.substring(posOne,posTwo));