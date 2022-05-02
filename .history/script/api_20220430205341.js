

const APIUrl = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products';


const pokemonsContainer = document.querySelector(".results");


async function getProducts() {
    try {
        const response = await fetch(APIUrl);
        console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON);
        const pokemonsData = responseJSON.results;
        console.log(pokemonsData);
        for (let i = 0; i < gameData.length; i++) {
            let gamePicture = gameData[i].images[0].src;
            let altText = gameData[i].images[0].alt;
            let gamePrice = gameData[i].prices.price;
            let currency = gameData[i].prices.currency_code;
            gamesContainer.innerHTML +=
                <div class="game-content">
                    <a href="gameinfo.html?id=${gameData[i].id}">
                        <img class="game-img" src="${gamePicture}" alt="${altText}"></img>
                    </a>
                    <div class="game-content">
                        <div>
                            <p>${gameData[i].name}</p>
                            <p>${gamePrice} ${currency}</p>
                        </div>
                        <div>
                            <a href="gameinfo.html?id=${gameData[i].id}">
                                <div class="btn-buy">Buy now</div>
                            </a>
                        </div>
                    </div>
                </div>;
        }
    } catch (error) {
        console.log('There is error', error);
    }
}




getProducts();