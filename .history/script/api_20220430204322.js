const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products';
const productsContainer = document.querySelector('.results');
async function getGamehubProducts() {

    try {
        const response = await fetch(API_URL);
        const responseJSON = await response.json();
        const productsData = responseJSON;
        console.log(responseJSON)
        productsContainer.innerHTML = '';
        for (let i = 0; i < productsData.length; i++) {
            productsContainer.innerHTML +=
                <div class="card">
                    <div class="heading">
                        <a href="product-details.html?id=${productsData[i].id}"><strong> Product Name: ${productsData[i].name}</strong></a>
                    </div>
                    <p>Description : ${productsData[i].description}</p>
                    <p>Id : ${productsData[i].id}</p>

                </div>
                ;
        }
    } catch (error) { }
}
getGamehubProducts();


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
            pokemonsContainer.innerHTML += `<li><span>${pokemonsData[i].name}</span></li>`
        }

    } catch (error) {
        console.log("Some error happened :(", error);
        pokemonsContainer.innerHTML = `<li><span>sorry some error happened :(</span></li>`

    }
}

getPokemonNames();