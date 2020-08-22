    const listContainer = document.querySelector("#listContainer");
    const imagenContainer = document.querySelector("#imagen")
    
    const getPokemon = (callback) => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then ( tipoDato => tipoDato.json() )
        .then ( (data) => callback(data) );

    }

    const renderPokeList = (data) => {
        const results = data.results;
        
        results.forEach(pokemon => {
            const listItem = document.createElement('li');

            fetch(pokemon.url)
            .then ( tipoDato => tipoDato.json() )
            .then ( (pokeInfo) => {

                listItem.classList.add("pokeContainer")
                listItem.innerHTML =`<img src= ${pokeInfo.sprites.front_default}  class='pokeMini'/>
                                    <span> ${pokeInfo.order} - </span>
                                    <span> ${pokemon.name}</span>
                                    `;
                
                listItem.addEventListener('click', () => {
                    imagenContainer.innerHTML = `<img src= ${pokeInfo.sprites.other.dream_world.front_default} class ='pokeview' /> `;
                    
                })
                listContainer.appendChild(listItem);
            } );

        });
        


    }

    getPokemon(renderPokeList);