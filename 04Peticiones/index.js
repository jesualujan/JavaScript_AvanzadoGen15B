console.log("Este es un ejemplo que consume una API de la NASA usando FETCH")
/*import fetch from "node-fetch"
const llave = "B4M0OPihTC0U7OFZcfj6PTizGQlDsl21351VamA7"

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


document.getElementById("fotodiv").innerHTML = `
	<h1>Ya se conecto el html con el javascript<h1>

` 










