//successful - wing.flywheelsites.com

const baseUrl = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products'
const getproduct = document.querySelector(".container")

async function getProductsName() {
    async function getPokemonNames() {
        try {
            const response = await fetch(baseUrl);
            console.log(response);
            const responseJSON = await response.json(); // convert the response to json data
            //console.log(responseJSON);
            const pokemonsData = responseJSON.results;
            console.log(pokemonsData);
            for (let i = 0; i < pokemonsData.length; i++) {
                console.log(pokemonsData[i]);
                getproduct.innerHTML += `<li><span><a href="pokemon-details.html?name=${pokemonsData[i].name}">${pokemonsData[i].name}</a></span></li>`
            }

        } catch (error) {
            console.log("Some error happened :(", error);
            getproduct.innerHTML = `<li><span>sorry some error happened :(</span></li>`

        }
    }
}

getProductsName();

