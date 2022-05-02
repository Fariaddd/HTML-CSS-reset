const API_URL = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products/';
const productsContainer = document.querySelector('.container');

async function displayGames() {
    try {
        const response = await fetch(API_URL);
        //console.log(productCall);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const productsData = responseJSON;
        productsContainer.innerHTML = '';
        for (let i = 0; i < productsData.length; i++) {
            productsContainer.innerHTML +=
                <div class="container">
                    <div class="heading">
                        <a href="product-details.html?id=${productsData[i].id}"><strong> Product Name: ${productsData[i].name}</strong></a>
                    </div>
                    <p>Description: ${productsData[i].description}</p>
                    <p>Id : ${productsData[i].id}</p>

                </div>
                ;
        }

    } catch (error) { }

}

displayGames();

