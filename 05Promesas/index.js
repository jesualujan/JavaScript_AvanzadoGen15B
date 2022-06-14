console.log("Clase de promesas")



//Ejemplo sencillo de Promesa
//Math.ceil (techo) redondea hacia arriba 
//Math.floor(piso) redondea hacia abajo
//console.log(Math.ceil(Math.random()*15))

/*
const promesaEjemplo=()=>{
    return new Promise((resolve,reject)=>{
        const numeroAleatorio = Math.ceil(Math.random()*10)
        setTimeout(()=>numeroAleatorio >=5 ?resolve(numeroAleatorio):reject(new Error(`El ${numeroAleatorio} es menor que 5`)),2000)


    })
}
promesaEjemplo().then(numero=> console.log(`${numero} PROMESA CUMPLIDA`))
.catch(error=> console.log(error))


// Otra forma de ejecutar una funcion Promesa es meterla dentro de una funcion Async y usar Await

const funcionAsincrona = async ()=>{
    try{
        const respuesta = await promesaEjemplo()
        console.log(`Trae respuesta con funcion async ${respuesta}`)

    } catch(error){
        console.log(error)
    }


}
funcionAsincrona()*/

// web SPOTIFY api

var SpotifyWebApi = require("spotify-web-api-node")
var clientId= "6cfb0c49a6ea4c9ab85f28c89cbfac62"
var clientSecret = "c76c896435e64db2a94299f943b563c8"

//Generar token de acceso
var spotifyApi  = new SpotifyWebApi({
    clientId:clientId,
    clientSecret:clientSecret


})

/*spotifyApi.clientCredentialsGrant()
.then(function(data){
    spotifyApi.setAccessToken(data.body["access_token"])
}, function(err){
    console.log("Algo salio mal al obtener el token de acceso",err)
})*/


/*spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token is ' + data.body['access_token']);
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );*/
  

/*const artista = "Moby"
spotifyApi.getArtistAlbums(artista).then(
    function(data){
        let album = data.body.items
        console.log(album)
    }, function(err){
        console.error(err)
    }
)*/
/*
spotifyApi.searchTracks('artist:Love').then(
    function(data) {
      console.log(data.body);
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );*/


  


  function ejecutar (){
    var artista = document.getElementById("artista")
    consultarSpotify(artista)


  }

const consultarSpotify = async(artista)=>{

    spotifyApi
  .clientCredentialsGrant()
  .then(function(data) {
    console.log('Retrieved access token', data.body['access_token']);

    // Set the access token
    spotifyApi.setAccessToken(data.body['access_token']);

    // Use the access token to retrieve information about the user connected to it
    return spotifyApi.searchArtists(artista);
  })
  .then(function(data) {
    // Print some information about the results
    //console.log('I got ' + data.body.tracks.total + ' results!');

    var artistas = data.body.artists.items
    artistas.forEach((art)=>{

        console.log(artistas)
    }
    
    )
    //console.log(data.body.artists.items)
    // Gorough the first page of results
    //var firstPage = data.body.tracks.items;
    //console.log('The tracks in the first page are (popularity in parentheses):');

    /*
     * 0: All of Me (97)
     * 1: My Love (91)
     * 2: I Love This Life (78)
     * ...
     */
    /*firstPage.forEach(function(track, index) {
      console.log(index + ': ' + track.name + ' (' + track.popularity + ')');
    });*/
  }).catch(function(err) {
    console.log('Something went wrong:', err.message);
  });




}


  