const API_URL = 'sesccuess-wing-flyweelsites.com/wp-json/wc/store/products/wp-json/wc/store/products';
const productsDisplay = document.querySelector('.container');

async function displayGames() {
    try {
        const productsCall = await fetch(API_URL);
        const productsResponse = await productsCall.json();
        for (let i = 0; i < productsResponse.length; i++);

    }
}
