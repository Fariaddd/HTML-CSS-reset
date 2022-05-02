const API_URL = 'sesccuess-wing-flyweelsites.com/wp-json/wc/store/products/wp-json/wc/store/products/';
const products = document.querySelector('.container');

async function displayGames() {

    const productsCall = await fetch(API_URL);
    console.log(productsCall);
    const productsResponse = await productsCall.json();
    // console.log(productsResponse)
}
