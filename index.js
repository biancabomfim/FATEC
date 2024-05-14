var url = "https://pokeapi.co/api/v2/pokemon/"
var id = 1

fetch(url + id)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        pokemon.innerHTML = `
        <img src="${data.sprites.front_default}" onclick="info()">
    `
    })

function info() {

    fetch(url + id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            habilidades=data.abilities.map(abilities=>abilities.ability.name)
            pokemon.innerHTML = `
             <img src="${data.sprites.front_default}" >
             <h2> nome:${data.name} </h2>
             <p> Altura:${data.height} </p>
             <p> Peso:${data.weight} </p>
             <p> Habilidades:${habilidades} </p>`
        })
}

function proximo (){
    id++
    fetch(url + id)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        pokemon.innerHTML = `
        <img src="${data.sprites.front_default}" onclick="info()">
    `
    })

}

function anterior(){
    id--
    fetch(url + id)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        pokemon.innerHTML = `
        <img src="${data.sprites.front_default}" onclick="info()">
    `
    })

}
