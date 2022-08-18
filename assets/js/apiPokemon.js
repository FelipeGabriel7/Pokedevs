let btnSearchClick = document.querySelector('.btn-search')
let searchInputPoke = document.querySelector('.search')
let cardPokemon = document.querySelector('.card')
let namePokemon = document.createElement('p')
let typePokemon = document.createElement('p')
let imgPokemon = document.createElement('img')


function getPokemon() {
  btnSearchClick.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInputPoke.value}`)
      .then(res => res.json())
      .then(res => {

        if(res.status === 404){
          return alert('Este Pokemon não existe')
        }
      
        cardPokemon.appendChild(namePokemon)
        cardPokemon.appendChild(typePokemon)
        cardPokemon.appendChild(imgPokemon)
        cardPokemon.classList.add('Pokemon')
        console.log(res)
        namePokemon.innerHTML = `
        ${res.id}.
        ${res.name.toUpperCase()}`
        imgPokemon.setAttribute('src', res.sprites.front_default)
        typePokemon.innerHTML =`${res.types[0].type.name} `
      })
      .catch(e => {
        return console.log(e)
      })
  })
}
getPokemon()