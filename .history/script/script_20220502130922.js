const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products';
const products = document.querySelector('.container');

async function displayGames() {

    const productsCall = await fetch(API_URL);
    //console.log(productsCall);
    const productsResponse = await productsCall.json();
    //console.log(productsResponse)
    for (let i = 0; i < productsResponse.lenght; i++); {
        products.innerHTML += '<div class="products-item">
            < div class="products-item-image"><img src="${productsResponse[i].imges[0].src}"></div>
            <p class="title"></p>
            <p class="short-description"></p>
            <p class="price>"></p>${productsResponse[i]prices.price}kr</p>
            <a href="/script/details.js?id=$"
            </div > ';
    }
}

displayGames();





