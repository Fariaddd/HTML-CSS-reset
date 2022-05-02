const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products/';
const products = document.querySelector('.container');

async function displayGames() {
    try {
        const productCall = await fetch(API_URL);
        console.log(productCall);
    }
}








