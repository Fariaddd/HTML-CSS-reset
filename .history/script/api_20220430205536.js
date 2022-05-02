

const APIUrl = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products';


const pokemonsContainer = document.querySelector(".results");


async function getProducts() {
    try {
        const response = await fetch(APIUrl);
        console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON);
        const pokemonsData = responseJSON.results;
        console.log(pokemonsData);
        productsContainer.innerHTML = '';
        for (let i = 0; i < productsData.length; i++) {
            productsContainer.innerHTML +=
                <div class="card">
                    <div class="heading">
                        <a href="product-details.html?id=${productsData[i].id}"><strong> Product Name: ${productsData[i].name}</strong></a>
                    </div>
                    <p>Description : ${productsData[i].description}</p>
                    <p>Id : ${productsData[i].id}</p>

                </div>
                ;
        }
    } catch (error) { }
}

getProducts();