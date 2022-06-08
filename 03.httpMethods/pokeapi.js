// VAMOS A TRABAJAR LA POKEAPI: https://pokeapi.co/
// ENDPOINT: https://pokeapi.co/api/v2/pokemon

//* 1 VAMOS  A TRAER A REQUEST QUE ACABAMOS DE INSTALAR
const request = require('request')

//*2 VAMOS A DECLARAR NUESTRA URI DE MI API
const URI = 'https://pokeapi.co/api/v2/pokemon/'

//*3 VAMOS A CREAR UNA FUNCIÓN QUE PIDA UN POKEMON Y ME DEVUELVA SUS TIPOS.

function getPokemonByName(name){
    // ES BUENA PRACTICA REVISAR SI LA API ES SENSIBLE A MAYUSCULAS O MINUSCULAS
    //LA POKEAPI NO LO ES, PODRIAMOS USAR UN LOWERCASE PARA EL NOMBRE 
    request.get(URI + name, function(error, response, body) {
            //VALIDAR SI MI PETICIÓN ES EXITOSA, ME VA A DEVOLVER LA DATA
            if(response.statusCode === 200 ){
                //parse convierte un objeto JSON en un objeto Javascript
                const bodyEnFormatoJs = JSON.parse(body)
                const typePokemon = bodyEnFormatoJs.types.map(
                    (objeto) => objeto.type.name)
                    console.log(`EL TIPO DE ${name} es ${typePokemon}`)
            }else {
                //si el código de estado es cualquier otro, muestrame el mensaje de error 
                console.log(`OCURRIO UN ERROR ${response.statusCode} ${response.statusMessage}`)
            }
    })
}
getPokemonByName('pikachu')
getPokemonByName('charmander')
