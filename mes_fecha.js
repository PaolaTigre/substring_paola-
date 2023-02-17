//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31"

function getMonth(fecha) {
   
   const d = new fecha(fecha);
   return d.getMonth() + 1;
 }
 
 const fecha = '2022-10-31';
 console.log(getMonth(fecha)); 