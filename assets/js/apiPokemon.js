let btnSearchClick = document.querySelector('.btn-search')
let searchInputPoke = document.querySelector('.search')
let cardPokemon = document.querySelector('.card')
let namePokemon = document.createElement('p')
let typePokemon = document.createElement('p')
let imgPokemon = document.createElement('img')
let errorSearch = document.querySelector('.error')

function getPokemon() {
  btnSearchClick.addEventListener('click', (e) => {
    e.preventDefault();

    if(searchInputPoke.value === '' || searchInputPoke.value < 1 || searchInputPoke.value > 899){
      errorSearch.classList.add('error')
      return errorSearch.innerHTML = 'valor inválido';
    }else{
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchInputPoke.value}`)
      .then(res => res.json())
      .then(res => {
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
          errorSearch.style.display = 'none';
      })
      .catch(e => {
        if(e.status === 404){
          errorSearch.classList.add('error')
          return errorSearch.innerHTML = 'Não existe este pokemon'
        }
      })
    }
  })
}
getPokemon()