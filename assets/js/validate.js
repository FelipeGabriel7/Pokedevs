let btnSearch = document.querySelector('.btn-search')
let searchInput = document.querySelector('.search')
let cardPokemonDisplay = document.querySelector('.card')
let errorSearch = document.querySelector('.error')
let btnback = document.querySelector('.btn-back')

function searchPokemon(){
  btnSearch.addEventListener('click' , function() {
    if(searchInput.value === ''){
      errorSearch.classList.add('error')
      cardPokemonDisplay.style.display = 'none'
      return errorSearch.textContent = ' é necessário informar um numero ou nome para buscar'
    }

    if(searchInput.value < 1 || searchInput.value >= 899){
      errorSearch.classList.add('error')
      cardPokemonDisplay.style.display = 'none'
      return errorSearch.textContent = ' Pokemon inválido '
    }
  })
}




searchPokemon()