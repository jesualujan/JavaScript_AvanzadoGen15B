const $pokemon = document.querySelector('#pokemon')
function renderPokemon(image){
    $pokemon.setAttribute('src',image)
}

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => response.json())
.then(pokemon => {
    // debugger
    renderPokemon(pokemon.sprites.back_default)
})