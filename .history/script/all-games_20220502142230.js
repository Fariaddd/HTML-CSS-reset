const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products/';
const products = document.querySelector('.container');

async function displayGames() {
    try {
        const response = await fetch(API_URL);
        //console.log(productCall);
        const responseJSON = await response.json();
        console.log(responseJSON);


    } catch (error) { }

}

displayGames();

