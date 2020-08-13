    const listContainer = document.querySelector("#listContainer");
    
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

                //listItem.innerHTML ="<img src="+pokeInfo.sprites.front_default+" /><span>"+pokeInfo.order+ "</span>"+pokemon.name+"</span>";
                listItem.innerHTML =`<img src= ${pokeInfo.sprites.front_default} />
                                    <span> ${pokeInfo.order}</span>
                                    <span> ${pokemon.name}</span>
                                    `;
                
                listContainer.appendChild(listItem);
            } );

        });
        


    }

    getPokemon(renderPokeList);