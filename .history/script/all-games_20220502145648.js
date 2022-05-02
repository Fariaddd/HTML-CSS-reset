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

            const img = productsData[i].images;
            const name = productsData[i].name;
            const id = productsData[i].id;
            const price = productsData[i].prices.price;
            const thumbnail = productsData[i].thumbnail;

            productsContainer.innerHTML += `
            <div class="heading">
            <a href="product-details.html?id=${id}"><strong> Product Name: ${name}</strong></a>
            <p><img src="${img[0].thumbnail}"</p>
            <p>Price:${price} NOK</p>
            <p>Id : ${id}</p>
            </div>
        `
        }
    } catch (error) { }
}

displayGames();

