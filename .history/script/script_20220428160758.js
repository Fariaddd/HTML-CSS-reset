//successful - wing.flywheelsites.com

const baseUrl = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products'
const productContainer = document.querySelector(".products")

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();

    pr

}
getProducts(baseUrl);

