console.log("Este es un ejemplo que consume una API de la NASA usando FETCH")
const llave = "B4M0OPihTC0U7OFZcfj6PTizGQlDsl21351VamA7"
/*import fetch from "node-fetch"


var endpoint = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-03-10&end_date=2018-03-16&api_key=${llave}`

const respuesta = await fetch(endpoint)
const meteoritos  = await respuesta.json()
//console.log(meteoritos)

var listaids= []
Object.keys(meteoritos.near_earth_objects).forEach(object =>{
	const asteroides_cerca =meteoritos.near_earth_objects[object]
	asteroides_cerca.forEach(peligrosos=>{
		if (peligrosos.is_potentially_hazardous_asteroid === true){
			console.log(`El asteroide ${peligrosos.name}  es potencialmente peligroso, y va a pasar en la fecha ${peligrosos.close_approach_data[0].close_approach_date_full} `)
			listaids.push(peligrosos.id)
		
		}
		else{
			console.log(`El asteroide ${peligrosos.name}  no representa ninguna amenaza`)
		}
	
	
	})

})


console.log("lista")
for (let i =0;i<listaids.length;i++){
	let idpeligroso = listaids[i]
	let endpointneo = `https://api.nasa.gov/neo/rest/v1/neo/${idpeligroso}?api_key=${llave}`
	let respuestaneo = await fetch(endpointneo)
	let meteoritosneo  = await respuestaneo.json()
	let listadatosaprox = meteoritosneo.close_approach_data
	listadatosaprox.forEach(dato =>{
					if(dato.orbiting_body === "Earth"){
						console.log(`El meteorito con id ${idpeligroso}, pasara a una velocidad de ${dato.relative_velocity.kilometers_per_second} kilometros por segundo en la fecha ${dato.close_approach_date_full} `)
					
					}
			
			
			})


}*/


/*document.getElementById("fotodiv").innerHTML = `
	<h1>Ya se conecto el html con el javascript<h1>

` */

var mars = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${llave}`

const ejemploMars = async(rover)=>{
	const informacion = await fetch(mars)
	var info =informacion.json()
	
	console.log(info)

}
var roverElegido ="curiosity"
var camaraElegida = "fhaz"
var dsv = 100
function seleccion(){
	let seleccionOpciones = document.getElementById("opcionesSeleccion")
	roverElegido = seleccionOpciones.value
	console.log(roverElegido)
}

function seleccion2(){
	let seleccionOpciones = document.getElementById("opcionesSeleccion2")
	camaraElegida = seleccionOpciones.value
	console.log(camaraElegida)
	



}

function ejecutar(){
	console.log("Se esta haciendo el fetch")
	var ds =document.getElementById("diasolar")
	dsv = ds.value
	
	marte(roverElegido,camaraElegida,dsv)
}
const marte =async(rover,camara,dsv)=>{
	console.log(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.toLowerCase()}/photos?sol=${dsv}&camera=${camara.toLowerCase()}&api_key=${llave}`)
	var respuestaFotos = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.toLowerCase()}/photos?sol=${dsv}&camera=${camara.toLowerCase()}&api_key=${llave}`)
	var {photos: fotosMarte} = await respuestaFotos.json()
	var divmarte = document.getElementById("tarjeta")
	while (divmarte.firstChild){
		divmarte.removeChild(divmarte.firstChild)
	}
	if (fotosMarte.length == 0){
		document.getElementById("tarjeta").innerHTML=`
		 <h2 class ="m-5 text-white text-3xl font-bold my-5"> Selecciona otro dia, no hay fotos en tu seleccion </h2>
		`

	}
	else{
		fotosMarte.forEach((foto)=>{
			let iddiv = "hijo"+String(foto.id)
			document.getElementById("tarjeta").innerHTML += `
			<div class="relative border rounded shadow" id=${iddiv}>
				<img src=${foto.img_src} alt=${foto.id} class="rounded" />
				<div class="bg-white opacity-70 p-5 absolute bottom-0 text-black font-bold flex flex-col">
					<span>${foto.earth_date}</span>
					<span>${foto.camera.name}</span>
				</div>
			</div>
			
			
			
			`
	
	
		})



	}
	

}


