const API_URL = 'sesccuess-wing-flyweelsites.com/wp-json/wc/store/products/wp-json/wc/store/products';
const products = document.querySelector('.container');

async function displayGames() {

    const productsCall = await fetch(API_URL);
    const productsResponse = await productsCall.json();
    console.log(productsCall)
}
