const API_URL = 'https://successful-wing.flywheelsites.com/';
const products = document.querySelector('.container');

async function displayGames() {

    const productsCall = await fetch(API_URL);
    console.log(productsCall);
    const productsResponse = await productsCall.json();
    // console.log(productsResponse)
}

displayGames();

