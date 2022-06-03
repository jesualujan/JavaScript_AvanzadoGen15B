// Codigo sincrono o secuencial
console.log(1)
console.log(2)
console.log(3)
console.log(4)


// ejemplo de Callback

function soyCien(){ return 100}
function soyDoscientos(){return 200}

function anidadoZuri(){
	console.log("Buena pregunta Zuri")
}

function sumaFunciones(funcionuno,funciondos){
	var suma = funcionuno()+ funciondos()
	anidadoZuri()
	return suma  

}

console.log(sumaFunciones(soyCien,soyDoscientos))
//Codigo asincrono
console.log("Uno")
//setTimeout(()=> console.log("Dos"),0)
console.log("Tres")
//Ejemplo foreach y map
var ejemploForeach =["Zuri","Christian","Flor","Frida"]

ejemploForeach.forEach((elemento,index,array)=>{
	console.log(`En la posicion ${index} se encuentra el alumno :${elemento}`)



})
var mapnuevo =ejemploForeach.map((elemento,index,array)=>{
	if(elemento.length > 4){
		return elemento
}

})
console.log(mapnuevo)

console.log("Primer tarea")
setTimeout(()=>{ 
	console.log("Segunda tarea")
},3000)

console.log("Tercer tarea")
setTimeout(()=>{ 
        console.log("Cuarta tarea")
},2500)
for (let i =0;i<9999999;i++);
console.log('Quinta')
setTimeout(()=>{ 
        console.log("Sexta tarea")
},4000)
console.log("Septima tarea")




function funcioncall(minutos){
	var horas = minutos/60
	if(horas >2){
		return minutos
}
	
}

function comparar(arreglo,fcall){
	resultados =[]
	for (let i=0;i<arreglo.length;i++){
		resultados.push(fcall(arreglo[i]))
	



}
return resultados
}

var min =[150,54,8,180,200,1]

var r = comparar(min,funcioncall)
console.log(r)












