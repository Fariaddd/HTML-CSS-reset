//successful - wing.flywheelsites.com

const baseUrl = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products'
const productContainer = document.querySelector(".products")

async function getProducts(baseUrl) {
    const response = await fetch(baseUrl);
    const products = await response.json();
    console.log(products);






}
getProducts(baseUrl);



