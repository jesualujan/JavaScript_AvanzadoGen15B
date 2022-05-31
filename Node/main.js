console.log("Se inicio main.js!!!")

var colores = require('colors')

console.log(colores.green)

function Sumar(x,y){
    let suma = x+y
    console.log("La suma es".black+suma)

}
Sumar(5,7)

for (let i=0; i<5; i++){
    console.log(`este es un contador i:${i}`.magenta)

}
