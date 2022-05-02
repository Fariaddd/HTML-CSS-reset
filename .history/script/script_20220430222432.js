//successful - wing.flywheelsites.com

const APIUrl = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products'



const pokemonsContainer = document.querySelector(".pokemons");


async function getPokemonNames() {
    try {
        const response = await fetch(APIUrl);
        // console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON);
        const pokemonsData = responseJSON.results;
        console.log(pokemonsData);
        for (let i = 0; i < pokemonsData.length; i++) {
            console.log(pokemonsData[i]);
            pokemonsContainer.innerHTML += `<li><span><a href="pokemon-details.html?name=${pokemonsData[i].name}">${pokemonsData[i].name}</a></span></li>`
        }

    } catch (error) {
        console.log("Some error happened :(", error);
        pokemonsContainer.innerHTML = `<li><span>sorry some error happened :(</span></li>`

    }
}

getPokemonNames();

