let btnLoad = document.querySelector('.btn-load')
let cardLoad = document.querySelector('.card-load-pokemon')
let btnRecovery = document.querySelector('.btn-recovery')


function getAllPokemons() {
  btnLoad.addEventListener('click', function () {
    setTimeout(() => {
      let pokemonsPromise = []
      
      for (let i = 1; i < 152; i++) {
        pokemonsPromise.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()))
      }

      Promise.all(pokemonsPromise)
        .then(res => {
          const listPokemons = res.reduce((acc, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            acc += `
            <li class="card-list">
              <img alt="${pokemon.name}" src="${pokemon.sprites.front_default}"/>
              <h2 class="titile"> ${pokemon.id}. ${pokemon.name} </h2>
              <p> ${types.join(' | ')} </p>
            </li>
          `
            return acc
          }, '')

          let ul = document.createElement('ul')
          ul.innerHTML = listPokemons;
          ul.classList.add('itens')
          cardLoad.appendChild(ul)
        })

        btnLoad.style.display = 'none'
        btnRecovery.style.display = 'block'
    }, 1000);
  });
}


function recoveryPage(){
  btnRecovery.addEventListener('click' , () => {
    setTimeout(() => {
        location.reload();
    }, 500)
  })
}

recoveryPage()
getAllPokemons()