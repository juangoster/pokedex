
fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
.then( (tipoDato) => tipoDato.json() )
.then( (data) => {
   
   
        for (p=0; p <= 150; p++){
        let nombre = "celebi"
        let poke = data.results[p]['name'];

        
            if (poke == nombre){
                foto = data.results[p]['url'];
                console.log(data.results[p])
                document.getElementById("imagen").src = foto;
            }
        }

        
    });
