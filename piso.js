//Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato
// de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.

function getFloorNumber(oficina) {
    return parseInt(oficina.split('.')[0], 10);
  }
  
  const oficina = '01.24';
  console.log(getFloorNumber(oficina)); 