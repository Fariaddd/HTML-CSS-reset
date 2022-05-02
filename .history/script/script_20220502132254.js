const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products/';
const products = document.querySelector('.container');

async function displayGames() {
    try {

        const productsCall = await fetch(API_URL);
        //console.log(productsCall);
        const productsResponse = await productsCall.json();
        //console.log(productsResponse)
        for (let i = 0; i < productsResponse.lenght; i++); {
            products.innerHTML += '<div class="products-item">
            '< div class="products-item-image" ><img src="${productsResponse[i].imges[0].src}"></div>'
            '<p class="title"></p>'
            '<p class="short-description"></p>'
            '<p class="price">${productsResponse[i]prices.price }kr</p >'
            '<a href="/indexx.html?id=${productsResponse[i].id}">View details</a>'
           </div > ';
        }
    } catch (error) {
        console.log(error);
    }
}
displayGames();





