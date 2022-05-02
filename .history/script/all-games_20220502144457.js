const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products/';
const productsContainer = document.querySelector('.container');

async function displayGames() {
    try {
        const response = await fetch(API_URL);
        //console.log(productCall);
        const responseJSON = await response.json();
        // console.log(responseJSON);
        const productsData = responseJSON;
        productsContainer.innerHTML = '';
        for (let i = 0; i < productsData.length; i++) {

            const img = responseJSON[i].images;
            const name = responseJSON[i].name;
            const id = responseJSON[i].id;
            const price = responseJSON[i].prices.price;
            const thumbnail = responseJSON[i].thumbnail;

            productsContainer.innerHTML += `
            
            <div class="heading">
                <a href="product-details.html?id=${id}"><strong> Product Name: ${name}</strong></a>
            </div>
            <p>Description: ${img}</p>
            <p>Id : ${id}</p>
        `
        }
    } catch (error) { }
}

displayGames();

