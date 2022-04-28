//successful - wing.flywheelsites.com

const baseUrl = 'https://successful-wing.flywheelsites.com/wp-json/wc/store/products'

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log("products");
}
getProducts(baseUrl);

