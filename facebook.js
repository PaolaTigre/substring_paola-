//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.


let url="facebook.com/nombreuser";
let UserName= "";

for (let i = 0; i < url.length; i++) {
   if (url[i]=="/") {
    UserName=url.substring(i) 
    console.log(url )

}
    
}
console.log(UserName);