let correo="pdtigre@sudamericano.edu.ec";
let userName= "";

for (let i = 0; i < correo.length; i++) {
   if (correo[i]=="@") {
    userName=correo.substring(0,i) }
    
}
console.log(userName);