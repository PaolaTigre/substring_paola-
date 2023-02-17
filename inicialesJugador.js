//Escribir un programa que obtenga las iniciales de un jugador de futbol, sabiendo que se usa iniciales y numero. 


let Name = "Paola-Tigre";

let one_inicial ="";
let two_inicial ="";
let resultado ="19";

one_inicial=Name.substring(0,1);

for (let i = 0; i < Name.length; i++) {
    if (Name[i]==="-") {
        two_inicial=Name.substring(i+1,i+2);
    }
}

if (one_inicial=="P"&& two_inicial=="T") {
    resultado= one_inicial + two_inicial + "2";
}
console.log( one_inicial  + " " +  two_inicial );
console.log("Iniciales son: " +resultado);