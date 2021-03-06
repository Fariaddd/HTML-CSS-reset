const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products';
for (let i = 0; i < gameData.length; i++) {
    let gamePicture = gameData[i].images[0].src;
    let altText = gameData[i].images[0].alt;
    let gamePrice = gameData[i].prices.price;
    let currency = gameData[i].prices.currency_code;
    gamesContainer.innerHTML +=
        <div class="game-content">
            <a href="gameinfo.html?id=${gameData[i].id}">
                <img class="game-img" src="${gamePicture}" alt="${altText}">
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

getGames();