// 1. Escribir un programa de extraiga la parte numérica de una placa de un auto


function extractPlaca(placa) {
    return placa.match(/\d+/g).join('');
  }
  
  const placa = 'ABC-1234';
  console.log(extractPlaca(placa)); 
